const textField = document.getElementById("text");
const wordCount = document.getElementById("wordCount");
const clearBtn = document.getElementById("clearBtn");
const copyBtn = document.getElementById("copyBtn");

function countWord() {
  let text = textField.value;
  text = text.trim();
  let words = text.split(/\s+/); // Use regex to filter out double spaces and other weirdness
  wordCount.innerText = words.filter((word) => {
    // Filter out "bad" words
    return word; // Keep word if it evaluates to true (removes empty words)
  }).length;
}

function textCheck() {
  if (sessionStorage.getItem("text")) {
    textField.value = sessionStorage.getItem("text");
  } // displays saved text in text field
}

clearBtn.onclick = () => {
  textField.value = ""; // Removes all text
  sessionStorage.removeItem("text");
  countWord();
};

saveBtn.onclick = () => {
  sessionStorage.setItem("text", textField.value);
  countWord();
};

textField.oninput = () => {
  // Keeping events in one place
  countWord();
};

window.onload = () => {
  // Text is preserved during refresh so count words on start
  textCheck(); // runs function on load
  countWord();
};

copyBtn.onclick = () => {
  document.querySelector("textarea").select();
  document.execCommand("copy");
  alert("Text copied to clipboard");
};
