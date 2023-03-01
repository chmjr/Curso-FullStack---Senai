function validaInt1a100() {
  //Faz a validação se um numero é entre 0-100
  var number = document.getElementById("qtdAcoes").value;
  if (number < 1 || number > 100) {
    alert("Escreva um numero entre 1 e 100");
  }
}

var apiKey = "5RKYV7T7A9CBJYQP";
var endpoint = "https://www.alphavantage.co/query";
var inputTicker = document.getElementById("ticker");
var suggestionList = document.getElementById("list");

inputTicker.addEventListener("input", debounce(getSuggestions, 500));

async function getSuggestions() {
  const query = inputTicker.value.toUpperCase();
  if (query.length < 2) {
    suggestionList.innerHTML = "";
    return;
  }
  const url = `${endpoint}?function=SYMBOL_SEARCH&keywords=${query}&apikey=${apiKey}&region=BR`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const matches = data.bestMatches;
    suggestionList.innerHTML = "";
    matches.filter((match) => match["1. symbol"].includes(".SAO")).forEach((match) => {
      const option = document.createElement("option");
      option.value = match["1. symbol"];
      option.textContent = match["2. name"];
      suggestionList.appendChild(option);
    });
  } catch (error) {
    console.error(error);
  }
}

function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
}
