import { Paciente } from "../models/paciente.js";

var conta = 0;
function addPaciente() {
  conta++;
  var nome = document.getElementById("vlNome").value;
  var sobrenome = document.getElementById("vlSobrenome").value;
  var peso = document.getElementById("vlPeso").value;
  var altura = document.getElementById("vlAltura").value;
  var imc = peso / altura;
  var paciente = new Paciente(nome, sobrenome, peso, altura, imc);
  console.log(paciente);
  imc = imc.toFixed(2);
  var linha = "";

    "<tr id='tableNutricao'><th scope='row' > " +
    conta +
    "</th><td>" +
    nome +
    "</td>" +
    "<td>" +
    sobrenome +
    "</td>" +
    "<td>" +
    peso +
    " KG</td>" +
    "<td>" +
    altura +
    " M</td>" +
    "<td>" +
    imc +
    "</td>" +
    "<td id='linhaExcluir'><input type='button' value='Remover' class='btn-danger' onClick=\"javascript:removeLinha()\"></input></td></tr>";

  document.getElementById("table").innerHTML += linha;
}
function removeLinha() {
  var tabela = document.querySelector("table");
  tabela.addEventListener("click", function (event) {
    var elementoClicado = event.target;
    if (elementoClicado.classList.contains("btn-danger")) {
      var elementoPai = elementoClicado.parentNode.parentNode;
      elementoPai.remove();
    }
  });
}
