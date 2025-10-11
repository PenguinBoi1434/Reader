// --- ELEMENTS ---
const transcriptBox = document.getElementById("transcript");
const answerBox = document.getElementById("answer");
const status = document.getElementById("status");

// --- TRIGGER PHRASES ---
const triggers = [
  "toss up math",
  "toss up physics",
  "bonus math",
  "bonus physics"
];

// --- HELPERS ---
function findTrigger(transcript) {
  transcript = transcript.trim().toLowerCase();
  for (const trigger of triggers) {
    if (transcript.startsWith(trigger)) {
      return trigger;
    }
  }
  return null;
}

// --- SPEECH RECOGNITION ---
let recognition;
if ("webkitSpeechRecognition" in window) {
  recognition = new webkitSpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false; // Only final results
  recognition.continuous = true;

  recognition.onresult = async (event) => {
    let text = "";
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      text += event.results[i][0].transcript;
    }
    transcriptBox.value = text;

    const trigger = findTrigger(text);
    if (trigger) {
      status.textContent = `🧠 Solving: ${trigger.toUpperCase()}...`;
      // Extract question (everything after trigger phrase)
      const question = text.substring(trigger.length).trim();
      transcriptBox.value = question;

      // Only call OpenAI if there's a question
      if (question) {
        answerBox.textContent = "";
        try {
          const res = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer YOUR_OPENAI_API_KEY" // <-- REPLACE THIS
            },
            body: JSON.stringify({
              model: "gpt-4o-mini",
              messages: [
                {
                  role: "system",
                  content: "You are a Science Bowl assistant. Answer questions concisely, quickly, and accurately."
                },
                {
                  role: "user",
                  content: question
                }
              ],
              max_tokens: 150
            })
          });
          const data = await res.json();
          const answer = data.choices?.[0]?.message?.content || "No answer found.";
          answerBox.textContent = answer;
          status.textContent = "✅ Answer ready!";
        } catch (err) {
          console.error(err);
          status.textContent = "❌ Error: " + err.message;
        }
      }
    } else {
      status.textContent = "Waiting for TOSS UP or BONUS Math/Physics question...";
      answerBox.textContent = "";
      // transcriptBox.value = ""; // (Optionally clear transcript if no trigger)
    }
  };

  recognition.onerror = (e) => {
    status.textContent = "❌ Speech error: " + e.error;
  };

  recognition.onend = () => {
    // Always restart for continuous listening
    recognition.start();
  };

  // Start listening immediately
  recognition.start();
  status.textContent = "Waiting for TOSS UP or BONUS Math/Physics question...";
} else {
  status.textContent = "Speech Recognition not supported in this browser.";
}
