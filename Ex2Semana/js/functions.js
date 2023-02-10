function exibirDiv(){
document.getElementById("card2").style.display = "block";
document.getElementById("email").focus();
}
function fecharDiv(){
    document.getElementById("popup").style.display = "none";    
}
function addLead(){
    if(confirm("Você tem mais de 18 anos?")){
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('tel').value; 
    var element = document.getElementById('divConfirma');
    element.innerHTML = "<span class='msgConfirma'>Cadastro feito com sucesso! <br> Nossa equipe entrará em contato!</span>";
    alert("Fique tranquilo que suas informações seram bem cuidadas");
    }else{
    alert("Desculpe mas você não pode se cadastrar no momento pela sua idade! Você será redirecionado...");
    setTimeout(function() {
        window.location.href = "index.html";
    }, 3000);    
    }
}

