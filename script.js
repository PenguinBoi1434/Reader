// --- ELEMENTS ---
const transcriptBox = document.getElementById("transcript");
const answerBox = document.getElementById("answer");
const status = document.getElementById("status");

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

    const question = text.trim();
    if (question) {
      status.textContent = `🧠 Solving question...`;
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
    } else {
      status.textContent = "Waiting for a question...";
      answerBox.textContent = "";
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
  status.textContent = "Waiting for a question...";
} else {
  status.textContent = "Speech Recognition not supported in this browser.";
}
