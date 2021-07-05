const textField = document.getElementById("text");
const wordCount = document.getElementById("wordCount");
const clearBtn = document.getElementById("clearBtn");

function countWord() {
  let text = textField.value;
	text = text.trim();
	let words = text.split(/\s+/); // Use regex to filter out double spaces and other weirdness
  wordCount.innerText = words.filter(word => { // Filter out "bad" words
		return word; // Keep word if it evaluates to true (removes empty words)
	}).length;
}

clearBtn.onclick = () => {
  textField.value = ""; // Removes all text
  countWord();
};

textField.oninput = () => { // Keeping events in one place
	countWord();
};

window.onload = () => { // Text is preserved during refresh so count words on start
	countWord();
}
