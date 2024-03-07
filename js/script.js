let menu = document.querySelector(".menu-bar");
let navList = document.querySelector(".nav-list");

menu.addEventListener("click", () => {
  navList.classList.toggle("open");
  menu.classList.toggle("open");
});

// close.addEventListener("click", () => {
//   navList.classList.remove("open");
//   menu.classList.remove("open");
//   close.classList.remove("open");
// });

// Circular progress html
let html = document.querySelector(".skills-html"),
  valueHtml = document.querySelector(".skills-value-html");

let startHtml = 0,
  endHtml = 90,
  speedHtml = 25;

let skillsHtml = setInterval(() => {
  startHtml++;

  valueHtml.textContent = `${startHtml}%`;
  html.style.background = `conic-gradient(
    var(--main-color) ${startHtml * 3.6}deg,
    var(--bg-color) 0deg`;

  if (startHtml == endHtml) {
    clearInterval(skillsHtml);
  }
}, speedHtml);

// Circular progress css
let css = document.querySelector(".skills-css"),
  valueCss = document.querySelector(".skills-value-css");

let startCss = 0,
  endCss = 80,
  speedCss = 25;

let skillsCss = setInterval(() => {
  startCss++;

  valueCss.textContent = `${startCss}%`;
  css.style.background = `conic-gradient(
    var(--main-color) ${startCss * 3.6}deg,
    var(--bg-color) 0deg`;

  if (startCss == endCss) {
    clearInterval(skillsCss);
  }
}, speedCss);

// Circular progress javascript
let js = document.querySelector(".skills-js"),
  valueJs = document.querySelector(".skills-value-js");

let startJs = 0,
  endJs = 12,
  speedJs = 25;

let skillsJs = setInterval(() => {
  startJs++;

  valueJs.textContent = `${startJs}%`;
  js.style.background = `conic-gradient(
    var(--main-color) ${startJs * 3.6}deg,
    var(--bg-color) 0deg`;

  if (startJs == endJs) {
    clearInterval(skillsJs);
  }
}, speedJs);

// Circular progress php
let php = document.querySelector(".skills-php"),
  valuePhp = document.querySelector(".skills-value-php");

let startPhp = 0,
  endPhp = 7,
  speedPhp = 25;

let skillsPhp = setInterval(() => {
  startPhp++;

  valuePhp.textContent = `${startPhp}%`;
  php.style.background = `conic-gradient(
    var(--main-color) ${startPhp * 3.6}deg,
    var(--bg-color) 0deg`;

  if (startPhp == endPhp) {
    clearInterval(skillsPhp);
  }
}, speedPhp);

function hello() {
  alert("hello");
}

//
[...document.querySelectorAll(".input-group")].forEach((el) => {
  const label = el.querySelector(".label");
  const input = el.querySelector(".input");
  const textArea = el.querySelector(".text-area");
  const message = el.querySelector(".message-label");

  input.addEventListener("focus", () => {
    label.classList.add("focus");
  });

  input.addEventListener("focusout", () => {
    if (!input.value) {
      label.classList.remove("focus");
    }
  });
});

function myFunction(x) {
  let float = document.querySelector(".message");
  let area = document.querySelector(".text-area");
  float.classList.add("focus");
}

function fungsiku() {
  let float = document.querySelector(".message");
  let area = document.querySelector(".text-area");
  if (!area.value) {
    float.classList.remove("focus");
  }
}
