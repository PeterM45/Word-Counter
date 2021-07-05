const textField = document.getElementById("text");
const wordCount = document.getElementById("wordCount");
const clearBtn = document.getElementById("clearBtn");
const copyBtn = document.getElementById("copyBtn");

function countWord() {
  let text = textField.value;
  text = text.trim();
  const words = text.split(" ");
  if (words[0] == "") {
    wordCount.innerText = 0;
  } else {
    wordCount.innerText = words.length;
  }
}

clearBtn.onclick = () => {
  textField.value = "";
  countWord();
};

copyBtn.onclick = () => {
  document.querySelector("textarea").select();
  document.execCommand("copy");
  alert("Text copied to clipboard");
};
