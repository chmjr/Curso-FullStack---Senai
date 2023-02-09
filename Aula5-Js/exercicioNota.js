function capturaPrompt(){
    var nota1 = Number(prompt('Digite Nota 1'));
    var nota2 = Number(prompt('Digite Nota 2'));
    var nota3 = Number(prompt('Digite Nota 3'));
    
    var soma = nota1 + nota2 + nota3;
    var media = soma / 3;
    
    alert('Soma das notas foi: '+soma+ ' e a Média do Aluno foi: '+media);    
}
/*
function calcNota(){
var nota1 = parseFloat(document.getElementById('nota1').value);
var nota2 = parseFloat(document.getElementById('nota2').value);
var nota3 = parseFloat(document.getElementById('nota3').value);

var soma = nota1 + nota2 + nota3;
var media = soma / 3;

alert('Soma das notas foi: '+soma+ ' e a Média do Aluno foi: '+media);

}*/