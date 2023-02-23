function exibirDiv(valor) {
  document.getElementById("div2passo").style.display = "block";
  valor = Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(valor); //Formata o valor para R$
  document.getElementById("soma").innerHTML = "Total: " + valor;
  document.getElementById("valorPizza").innerHTML = valor;
  var mainPage = document.getElementById("mainPage");
  mainPage.style.opacity = "0.5";

  var option1 = document.getElementById("massa");
  var option2 = document.getElementById("borda");

  option1.addEventListener("change", somaSelectedMassa);
  option2.addEventListener("change", somaSelectedBorda);
}
function exibirDivPasso3() {
  document.getElementById("div3passo").style.display = "block";
  document.getElementById("div2passo").style.display = "none";
  var mainPage = document.getElementById("mainPage");
  mainPage.style.opacity = "0.5";
}
function fecharDiv() {
  document.getElementById("div2passo").style.display = "none";
  var mainPage = document.getElementById("mainPage");
  mainPage.style.opacity = "1";
}
function fecharDiv23() {
  document.getElementById("div2passo").style.display = "none";
  document.getElementById("div3passo").style.display = "none";
  var mainPage = document.getElementById("mainPage");
  mainPage.style.opacity = "1";
}
function mask(o, f) {
  setTimeout(function () {
    var v = mphone(o.value);
    if (v != o.value) {
      o.value = v;
    }
  }, 1);
}

function mphone(v) {
  var r = v.replace(/\D/g, "");
  r = r.replace(/^0/, "");
  if (r.length > 10) {
    r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (r.length > 5) {
    r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
  } else if (r.length > 2) {
    r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
  } else {
    r = r.replace(/^(\d*)/, "($1");
  }
  return r;
}
function somaSelectedMassa() {
  habilitarCampos();
  var soma = 0;
  var integral = 7;
  var temperada = 8;
  var valorPizza = document.getElementById("valorPizza").textContent;
  valorPizza = valorPizza.replace(/[^\d,]/g, ""); //Tratar numero quando vêm em valor R$
  valorPizza = valorPizza.replace(",", ".");
  switch (document.getElementById("massa").value) {
    case "integral":
      soma = integral + parseFloat(valorPizza);
      soma = Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL",
      }).format(soma); //Formata o valor para R$
      document.getElementById("soma").innerHTML = "Total: " + soma;
      break;
    case "temperada":
      soma = temperada + parseFloat(valorPizza);
      soma = Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL",
      }).format(soma); //Formata o valor para R$
      document.getElementById("soma").innerHTML = "Total: " + soma;
      break;
  }
}
function somaSelectedBorda() {
  var soma = 0;
  var catup = 5;
  var cheddar = 5;
  var valorPizza = document.getElementById("soma").textContent;
  valorPizza = valorPizza.replace(/[^\d,]/g, ""); //Tratar numero quando vêm em valor R$
  valorPizza = valorPizza.replace(",", "."); // NUMERO PARA FLOAT (numeros presupostos que estão corretos em R$ > 1000,00)
  switch (document.getElementById("borda").value) {
    case "catup":
      soma = catup + parseFloat(valorPizza);
      soma = Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL",
      }).format(soma); //Formata o valor para R$
      document.getElementById("soma").innerHTML = "Total: " + soma;

    case "cheddar":
      soma = cheddar + parseFloat(valorPizza);
      soma = Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL",
      }).format(soma); //Formata o valor para R$
      document.getElementById("soma").innerHTML = "Total: " + soma;
  }
}

function habilitarCampos() {
  if ($("#massa").val() != "0") {
    $("#borda").prop("disabled", false);
  } else {
    $("#borda").prop("disabled", true);
  }
}
