/*let linguagens = ["PYTHON", "JAVA", "JAVASCRIPT", "PHP"];
console.log(linguagens);

linguagens.unshift("ANGULAR"); //Insere um novo elemento no começo do array
console.log(linguagens);

linguagens.splice(1); //Pode ser usado para inserir ou substituir na posição, na primeira posição vai o item que se quer mexer e o segundo item
console.log(linguagens);

linguagens.slice(2);
console.log(linguagens);*/

/* let numeros = [2, 4, 6];
let dobro = numeros.map((numero) => { //Map percorre o array e retorna os valores
  return numero * 2;
});
console.log(dobro); */

/*
let numeros = [2, 7, 8, 9, 20, 50, 18];
numeros = numeros.filter((numero) => { //Pega um array e filtra com uma condição dentro e retorna lista
  return numero > 10;
});
console.log(numeros);
*/

/*
const euros = [29.76, 42.67, 60.7];
const soma = euros.reduce((total, quantidade) => total + quantidade); 
//Reduce é feito para ir somando e criando a um subtotal de acordo como ele vai lendo a lista
*/

const numero1 = [2, 4, 6, 8, 10];
console.log(numero1);

const numero2 = [20, 30, 40, 50, 60];
console.log(numero2);

const numero3 = [...numero2, ...numero1]; //... Os três pontos é o símbolo do Spread
console.log(numero3);

var negociacoes = []; 
let negociacao = [1, 2, 3, 4, 5];
negociacoes.push(negociacao);
let negociacao2 = [3, 4, 6, 8, 10];
negociacoes.push(negociacao2);
console.log(negociacoes);
negociacoes.splice(0,1);
console.log(negociacoes);
