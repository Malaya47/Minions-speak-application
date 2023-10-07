// API url

const url = "https://api.funtranslations.com/translate/minion.json";

// selecting the elements

const textArea = document.querySelector(".text-js");
const buttonTranslate = document.querySelector(".btn-js");
const translatedText = document.querySelector(".translated-text");

// function to handle the url with the text

function translated(innerText) {
  let completeUrl = url + "?" + "text=" + innerText;
  return completeUrl;
  // console.log(completeUrl);
}
