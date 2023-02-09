alert("Hello World, this is my first system");

var dataNasc = '2007-11-07';
var dataHoje = '2023-02-07';
var [anoHj, mesHj, diaHj] = dataHoje.split('-').map(Number);
var [anoNasc, mesNasc, diaNasc] = dataNasc.split('-').map(Number);

alert('Rico tem '+ (anoHj - anoNasc) +' anos e ' + (new Date(dataHoje) - new Date(dataNasc)) / (1000*3600*24)+' dias de vida');

if(anoHj - anoNasc >= 18){
    alert("Você é maior de idade");
}else{
    alert("Você é menor de idade");
}