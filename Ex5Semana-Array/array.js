//Exemplo de Arrow Function - Exercicio 1
/*const mensagemOla = () => { //Variavel fica com o return
    return "Olá, Mundo!";
}
console.log(mensagemOla()); //Chama a função
*/

/*
//Arrow Function - Exercicio 2
let nome = "Henrique";
const mensagemOla = (nome) => { //Passa parametro nome e o Resultado está no return
    return "Olá, "+nome;
}
console.log(mensagemOla(nome)); //Chama a função com parametro 
*/

/*
//Arrow Funtion com o reverse - Exercicio 3
var arrayNumeros = [1,2,3,4,5,6,7,8,9];
var arrayInvertido = [];

const inverteArray = (arrayNumeros) => { //Arrow Function passando um parametro array 
    arrayInvertido = arrayNumeros.reverse(); //Metodo reverse - inverte os numeros do array
    return "Array Invertido: " +arrayInvertido+", Array Numeros: "+arrayNumeros;
}
console.log(inverteArray(arrayNumeros));
*/
/*
//Arrow Funtion com o Filter - Exercicio 4
var arrayNumeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var arrayImpares = [];

const numerosImpares = (arrayNumeros) => {
    arrayImpares = arrayNumeros.filter(numeros => numeros % 2 === 1); //O filter tem uma função dentro que filtra a condição para que o array seja alterada
    return arrayImpares;
}
console.log(numerosImpares(arrayNumeros));
*/
/*
//Arrow Funtion com o Filter - Exercicio 5
var arrayNumeros = [1,2,3,4,5,6,7,8,9];
var arrayQuadrados = [];

const arrowQuadrados = (arrayNumeros) => {
    arrayQuadrados = arrayNumeros.map(numeros => numeros ** 2); mapeia dentro do array e chama uma função para fazer o quadrado de cada numero
    return arrayQuadrados;
}
console.log(arrowQuadrados(arrayNumeros));
*/

function localStorageFrutas(){
var arrayFrutas = ["Banana", "Morango", "Maça", "Uva", "Pêra"];

arrayFrutas.forEach((fruta) => { //Foreach percorre o Array elemento por elemento.
  localStorage.setItem(fruta, fruta); //Guarda cada item no localstorage
});
}
