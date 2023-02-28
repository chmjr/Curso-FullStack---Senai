function piscar() {
  var cont = 0;
  var intervalo = 0;

  while (cont < 10) {
    intervalo += 300;
    setTimeout(
      "document.getElementById('imgLampada').src='img/lampadaAcesa.png'",
      intervalo
    );
    intervalo += 300;
    setTimeout(
      "document.getElementById('imgLampada').src='img/lampadaDesl.png'",
      intervalo
    );
    cont++;
  }
}

var convidados = JSON.parse(localStorage.getItem("convidados")) || [];
var elLista = document.getElementById("listaConvidados");
var campo = document.getElementById("campo");
var botao = document.getElementById("btnAdd");
var convidados = [];

botao.onclick = function () {
  //Chamar Função no onclick
  var nome = campo.value;
  convidados.push({ nome: nome }); //Add no array o nome, propriedade nome
  campo.value = ""; //Esvaziar campo input text
  salvarConvidados();
};
function salvarConvidados() {
  //Salvar no localStorage array convertido em JSON
  localStorage.setItem("convidados", JSON.stringify(convidados));
}
function listarConvidados() {
  for (const convidado of convidados) {
    var elConvidado = document.createElement("li");
    var elNome = document.createTextNode(convidado.nome);
  }
}

let ligar;
function minhaFuncao() {
  ligar = setInterval(consoleLog, 2000);
}

function pararFuncao() {
  clearInterval(ligar);
}

function consoleLog() {
  console.log("olá");
}
document.getElementById("btn").onclick = minhaFuncao;
document.getElementById("btn2").onclick = pararFuncao;
