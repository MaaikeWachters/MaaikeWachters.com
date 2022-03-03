// TO DO
// on click copy password; hint: use input type text to display the password options

let characters = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  "|",
  ":",
  ";",
  "<",
  ",",
  ">",
  ".",
  "?",
  "/",
];
let buttonEl1 = document.getElementById("button-el-1");
let buttonEl2 = document.getElementById("button-el-2");
let buttonEl3 = document.getElementById("button-el-3");
let buttonEl4 = document.getElementById("button-el-4");
let passwordLength = document.getElementById("password-length");

function getPasswordLength() {
  passwordLength = passwordLength.value;
}

function generatePasswords() {
  getPasswordLength();
  let password1 = "";

  for (let i = 0; i < passwordLength; i++) {
    password1 += characters[Math.floor(Math.random() * characters.length)];
  }
  buttonEl1.textContent = password1;

  let password2 = "";
  for (let i = 0; i < passwordLength; i++) {
    password2 += characters[Math.floor(Math.random() * characters.length)];
  }
  buttonEl2.textContent = password2;

  let password3 = "";
  for (let i = 0; i < passwordLength; i++) {
    password3 += characters[Math.floor(Math.random() * characters.length)];
  }
  buttonEl3.textContent = password3;

  let password4 = "";
  for (let i = 0; i < passwordLength; i++) {
    password4 += characters[Math.floor(Math.random() * characters.length)];
  }
  buttonEl4.textContent = password4;
}

function copyPassword1() {
  const cb = navigator.clipboard;

  cb.writeText(buttonEl1.innerText).then(() => alert("Text copied"));
}

function copyPassword2() {
  const cb = navigator.clipboard;

  cb.writeText(buttonEl2.innerText).then(() => alert("Text copied"));
}

function copyPassword3() {
  const cb = navigator.clipboard;

  cb.writeText(buttonEl3.innerText).then(() => alert("Text copied"));
}

function copyPassword4() {
  const cb = navigator.clipboard;

  cb.writeText(buttonEl4.innerText).then(() => alert("Text copied"));
}
