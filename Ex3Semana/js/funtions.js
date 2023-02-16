function verificaParImpar() {
  var numero = prompt(
    "Digite um número inteiro",
    "Será desconsiderado número depois da vírgula!!"
  );
  numero = parseInt(numero);
  if (numero != null) {
    if (numero % 2 == 0) {
      alert("Número digitado é par!!!");
    } else {
      alert("Número digitado é ímpar!!!");
    }
  } else {
    alert("Número inválido!!!");
  }
}
function classificaIdade() {
  var idade = prompt("Digite uma idade!");
  if (idade >= 0 && idade <= 110) {
  } else if (idade >= 0 && idade <= 12) {
    alert("Criança: 0 a 12 anos");
  } else if (idade >= 13 && idade <= 17) {
    alert("Adolescente: 13 a 17 anos");
  } else if (idade >= 18 && idade <= 65) {
    alert("Adulto: 18 a 65 anos;");
  } else if (idade >= 66 && idade <= 110) {
    alert("Sênior: 66 anos ou mais");
  } else if (idade <= 0 || idade >= 110) {
    alert("Idade inválida!");
  }
}
function verificaCarroViavel() {
  var peso = prompt("Digite o peso do carro em kg!");
  var comprimento = prompt("Digite o comprimento do carro em kg!");
  if (peso <= 1500 && comprimento <= 5) {
    alert("Seu carro pode passar pela ponte!");
  } else {
    alert("Seu carro não pode passar pela ponte!");
  }
}
function classificaBonus() {
  var vendas = prompt("Digite o valor de suas vendas!");
  if (vendas <= 10000) {
    alert("Seu bônus é o bronze!");
  } else if (vendas >= 10000 && vendas < 50000) {
    alert("Seu bônus é o prata!");
  } else if (vendas >= 50000 && vendas <= 500000) {
    alert("Seu bônus é o ouro");
  } else if (vendas >= 500000) {
    alert("Seu bônus é o platinum");
  }
}
function verificaSenha() {
  var tentativa = prompt("Digite a sua senha!");
  var senha = 1234;
  if (tentativa == senha) {
    alert("ACESSO PERMITIDO!");
  } else {
    alert("ACESSO NÃO PERMITIDO");
  }
}
function numeroMaior() {
  var numero1 = prompt("Digite o número 1");
  var numero2 = prompt("Digite o número 2");
  if (numero1 > numero2) {
    alert("NUMERO 1 É O MAIOR");
  } else if (numero2 > numero1) {
    alert("NUMERO 2 É O MAIOR");
  }
}
