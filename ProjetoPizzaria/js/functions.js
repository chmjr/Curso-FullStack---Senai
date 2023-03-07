function exibirDiv(valor, pizza) {
  document.getElementById("div2passo").style.display = "block";
  valor = Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(valor); //Formata o valor para R$
  document.getElementById("soma").innerHTML = "Total: " + valor;
  document.getElementById("valorPizza").innerHTML = valor;
  document.getElementById("campoPizza").value = pizza;
  var mainPage = document.getElementById("mainPage");
  mainPage.style.opacity = "0.5";

  var option1 = document.getElementById("campoMassa");
  var option2 = document.getElementById("campoBorda");

  option1.addEventListener("change", somaSelectedMassa);
  option2.addEventListener("change", somaSelectedBorda);
}
function exibirDivPasso3() {
  if (document.getElementById("campoMassa").value == 0) {
    //Verificar se foi preenchida o select a massa
    alert("Selecione o tipo de massa!");
    document.getElementById("campoMassa").style.borderColor = "#ff6961";
  } else if (document.getElementById("campoBorda").value == 0) {
    //Verificar se foi preenchida o select a borda
    alert("Selecione o tipo de borda!");
    document.getElementById("campoBorda").style.borderColor = "#ff6961";
  } else {
    document.getElementById("div3passo").style.display = "block";
    document.getElementById("div2passo").style.display = "none";
    var mainPage = document.getElementById("mainPage");
    mainPage.style.opacity = "0.5";
  }
}
function exibirDivPasso4() {
  document.getElementById("div4passo").style.display = "block";
  document.getElementById("div3passo").style.display = "none";
  var valorTotal = document.getElementById("soma").textContent;
  var pizza = document.getElementById("campoPizza").value;
  var nome = document.getElementById("campoNome").value;
  var email = document.getElementById("campoEmail").value;
  var telefone = document.getElementById("campoTelefone").value;
  var rua = document.getElementById("campoRua").value;
  var bairro = document.getElementById("campoBairro").value;
  var cidade = document.getElementById("campoCidade").value;
  var estado = document.getElementById("campoEstado").value;
  var numero = document.getElementById("campoNumero").value;
  document.getElementById("resumoPedido").innerHTML =
    "<p>Olá " +
    nome +
    "</p><p>Email: " +
    email +
    "</p><p>Telefone: " +
    telefone +
    "</p><p>Confira os seus dados e confirme o pedido</p> <p>Seu pedido de " +
    pizza +
    "<p> Endereço: " +
    rua +
    " Nº " +
    numero +
    ", Bairro: " +
    bairro +
    ",</p><p> Cidade: " +
    cidade +
    ", Estado:" +
    estado +
    "</p> <p> Valor Total Pedido " +
    valorTotal +
    "</p>";
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
function fecharDiv4() {
  document.getElementById("div2passo").style.display = "none";
  document.getElementById("div3passo").style.display = "none";
  document.getElementById("div4passo").style.display = "none";
  var mainPage = document.getElementById("mainPage");
  mainPage.style.opacity = "1";
  window.location.reload();
}
function mask(o, f) {
  //Mascara para input telefone
  setTimeout(function () {
    var v = mphone(o.value);
    if (v != o.value) {
      o.value = v;
    }
  }, 1);
}

function somaSelectedMassa() {
  //Para somar o valor da massa no total
  habilitarCampos();
  if ((document.getElementById("campoMassa").style.borderColor = "#ff6961")) {
    document.getElementById("campoMassa").style.borderColor = "";
  }
  var soma = 0;
  var comum = 0;
  var integral = 7;
  var temperada = 8;
  var valorPizza = document.getElementById("valorPizza").textContent;
  valorPizza = valorPizza.replace(/[^\d,]/g, ""); //Tratar numero quando vêm em valor R$
  valorPizza = valorPizza.replace(",", ".");
  switch (document.getElementById("campoMassa").value) {
    case "comum":
      soma = comum + parseFloat(valorPizza);
      soma = Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL",
      }).format(soma); //Formata o valor para R$
      document.getElementById("soma").innerHTML = "Total: " + soma;
      break;
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
  document.getElementById("valorPizzaMassa").innerHTML = soma;
}
function somaSelectedBorda() {
  //Para somar o valor da borda no total
  if ((document.getElementById("campoBorda").style.borderColor = "#ff6961")) {
    //Tirar a cor da borda se tiver com vermelho
    document.getElementById("campoBorda").style.borderColor = "";
  }
  var soma = 0;
  var simples = 0;
  var catup = 5;
  var cheddar = 6;
  var valorPizza = document.getElementById("valorPizzaMassa").textContent;
  valorPizza = valorPizza.replace(/[^\d,]/g, ""); //Tratar numero quando vêm em valor R$
  valorPizza = valorPizza.replace(",", "."); // NUMERO PARA FLOAT (numeros presupostos que estão corretos em R$ > 1000,00)
  switch (document.getElementById("campoBorda").value) {
    case "simples":
      soma = simples + parseFloat(valorPizza);
      soma = Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL",
      }).format(soma); //Formata o valor para R$
      document.getElementById("soma").innerHTML = "Total: " + soma;
      break;
    case "catup":
      soma = catup + parseFloat(valorPizza);
      soma = Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL",
      }).format(soma); //Formata o valor para R$
      document.getElementById("soma").innerHTML = "Total: " + soma;
      break;
    case "cheddar":
      soma = cheddar + parseFloat(valorPizza);
      soma = Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL",
      }).format(soma); //Formata o valor para R$
      document.getElementById("soma").innerHTML = "Total: " + soma;
      break;
  }
}

function habilitarCampos() {
  //Para habilitar o segundo select depois do primeiro
  if ($("#campoMassa").val() != "0") {
    $("#campoBorda").prop("disabled", false);
  } else {
    $("#campoBorda").prop("disabled", true);
  }
}
