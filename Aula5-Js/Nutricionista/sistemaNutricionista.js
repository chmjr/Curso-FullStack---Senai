
function addPaciente(){
    var conta = 0;
    conta++;

        var id = conta;
        var nome = document.getElementById('vlNome').value;
        var sobrenome = document.getElementById('vlSobrenome').value;
        var peso = document.getElementById('vlPeso').value;
        var altura = document.getElementById('vlAltura').value;
        var imc = peso / altura;

        var linha = "<tr id='tableNutricao'><th scope='row' > "+id+ "</th><td>"+ nome + "</td>"+
        "<td>"+ sobrenome +"</td>"+ 
        "<td>"+ peso +"</td>"+
        "<td>"+ altura+"</td>"+
        "<td>"+ imc +"</td>"+
        "<td id='linhaExcluir'><input type='button' value='Remover' class='btn-danger' onClick=\"javascript:removeLinha()\"></input></td></tr>";
        
         document.getElementById("table").innerHTML += linha;
} 
function removeLinha(){
    var tabela = document.querySelector('table');
    tabela.addEventListener("click", function(event){
       var elementoClicado = event.target;
       if(elementoClicado.classList.contains("btn-danger")){
       var elementoPai = elementoClicado.parentNode.parentNode;
       elementoPai.remove();
       }
    })
}