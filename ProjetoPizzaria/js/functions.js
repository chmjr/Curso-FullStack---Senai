function exibirDiv(valor, pizza) {
  document.getElementById("div2passo").style.display = "block";
  valor = Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(valor); //Formata o valor para R$
  document.getElementById("soma").innerHTML = "Total: " + valor;
  document.getElementById("valorPizza").innerHTML = valor;
  document.getElementById("pizza").value = pizza;
  var mainPage = document.getElementById("mainPage");
  mainPage.style.opacity = "0.5";

  var option1 = document.getElementById("massa");
  var option2 = document.getElementById("borda");

  option1.addEventListener("change", somaSelectedMassa);
  option2.addEventListener("change", somaSelectedBorda);
}
function exibirDivPasso3() {
  if (document.getElementById("massa").value == 0) {
    //Verificar se foi preenchida o select a massa
    alert("Selecione o tipo de massa!");
    document.getElementById("massa").style.borderColor = "#ff6961";
  } else if (document.getElementById("borda").value == 0) {
    //Verificar se foi preenchida o select a borda
    alert("Selecione o tipo de borda!");
    document.getElementById("borda").style.borderColor = "#ff6961";
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
  var pizza = document.getElementById("pizza").value;
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var telefone = document.getElementById("tel").value;
  var rua = document.getElementById("rua").value;
  var bairro = document.getElementById("bairro").value;
  var cidade = document.getElementById("cidade").value;
  var estado = document.getElementById("estado").value;
  var numero = document.getElementById("numero").value;
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
  if ((document.getElementById("massa").style.borderColor = "#ff6961")) {
    document.getElementById("massa").style.borderColor = "";
  }
  var soma = 0;
  var comum = 0;
  var integral = 7;
  var temperada = 8;
  var valorPizza = document.getElementById("valorPizza").textContent;
  valorPizza = valorPizza.replace(/[^\d,]/g, ""); //Tratar numero quando vêm em valor R$
  valorPizza = valorPizza.replace(",", ".");
  switch (document.getElementById("massa").value) {
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
  if ((document.getElementById("borda").style.borderColor = "#ff6961")) {
    //Tirar a cor da borda se tiver com vermelho
    document.getElementById("borda").style.borderColor = "";
  }
  var soma = 0;
  var simples = 0;
  var catup = 5;
  var cheddar = 6;
  var valorPizza = document.getElementById("valorPizzaMassa").textContent;
  valorPizza = valorPizza.replace(/[^\d,]/g, ""); //Tratar numero quando vêm em valor R$
  valorPizza = valorPizza.replace(",", "."); // NUMERO PARA FLOAT (numeros presupostos que estão corretos em R$ > 1000,00)
  switch (document.getElementById("borda").value) {
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
  if ($("#massa").val() != "0") {
    $("#borda").prop("disabled", false);
  } else {
    $("#borda").prop("disabled", true);
  }
}
