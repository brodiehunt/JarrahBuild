const words = ["HOME.", "MEMORIES.", "LIFESTYLE.", "QUALITY.", "EXPERIENCE."];
let wordCount = 0;
let letterIndex = 0;
let currentWord = '';
let currentLetters = '';

function typing() {
  if (wordCount === words.length) {
    count = 0;
  }

  currentWord = words[wordCount];
  currentLetters = currentWord.slice(0, ++letterIndex);

  document.querySelector(".typing").textContent = currentLetters;

  if (currentLetters.length === currentWord.length) {
    wordCount++;
    letterIndex = 0;

  }

  if ((words.indexOf(currentWord) === words.length -1) && (currentWord.length === currentLetters.length)) {
    console.log("Entered into bracket");
    wordCount=0;
    letterIndex=0;
    currentWord='';
    currentLetters='';
    typing();
    return;
  }
  setTimeout(typing, 250);
};

typing();