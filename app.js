function changeBackToDefault() {
  let name = document.querySelector("h1");
  name.innerHTML = "yip";

  let greeting = document.querySelector("#english");
  greeting.innerHTML =
    "<span style='color: #BFffffff; font-size:24px;'>testing</span>";
}

// ENGLISH

function changeToEnglish() {
  let name = document.querySelector("h1");
  name.innerHTML = "Hi";

  let greeting = document.querySelector("#english");
  greeting.innerHTML =
    "<span style='color: #ffffff; font-size:32px;'>test</span>";
}

let changeEnglish = document.querySelector("#english");
changeEnglish.addEventListener("mouseenter", changeToEnglish);

let changeBack = document.querySelector("#english");
changeBack.addEventListener("mouseleave", changeBackToDefault);

/*
// FINNISH

function changeToFinnish() {
  let name = document.querySelector("h1");
  name.innerHTML = "Nimeni on Maaike";

  let greeting = document.querySelector("#finnish");
  greeting.innerHTML =
    "<span style='color: #ffffff; font-size:32px;'>moi</span>";
}

let changeFinnish = document.querySelector("#finnish");
changeFinnish.addEventListener("mouseenter", changeToFinnish);

// MANDARIN

function changeToMandarin() {
  let name = document.querySelector("h1");
  name.innerHTML = "我叫 麦可";

  let greeting = document.querySelector("#mandarin");
  greeting.innerHTML =
    "<span style='color: #ffffff; font-size:32px;'>你好</span>";
}

let changeMandarin = document.querySelector("#mandarin");
changeMandarin.addEventListener("mouseenter", changeToMandarin);

// FRENCH

function changeToFrench() {
  let name = document.querySelector("h1");
  name.innerHTML = "Je m'appelle Maaike";

  let greeting = document.querySelector("#french");
  greeting.innerHTML =
    "<span style='color: #ffffff; font-size:32px;'>bonjour</span>";
}

let changeFrench = document.querySelector("#french");
changeFrench.addEventListener("mouseenter", changeToFrench);

// KOREAN

function changeToKorean() {
  let name = document.querySelector("h1");
  name.innerHTML = "내 이름은 마아이케";

  let greeting = document.querySelector("#korean");
  greeting.innerHTML =
    "<span style='color: #ffffff; font-size:32px;'>안녕하세요</span>";
}

let changeKorean = document.querySelector("#korean");
changeKorean.addEventListener("mouseenter", changeToKorean);
*/
