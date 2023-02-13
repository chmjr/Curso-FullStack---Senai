function exibirDiv() {
  document.getElementById("card2").style.display = "block";
  document.getElementById("card2-overlay").style.zIndex = 4;
  document.getElementById("email").focus();
}
function fecharDiv() {
  document.getElementById("card2").style.display = "none";
}
function addLead() {
  if (confirm("Você só pode se cadastrar se tiver mais do que 18 anos?")) {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("tel").value;
    var element = document.getElementById("divConfirma");
    element.innerHTML =
      "<span class='msgConfirma'>Cadastro feito com sucesso! <br> Nossa equipe entrará em contato!</span>";
    alert("Fique tranquilo que suas informações seram bem cuidadas");
    setTimeout(fecharDiv, 4000);
  } else {
    alert(
      "Desculpe mas você não pode se cadastrar no momento pela sua idade! Você será redirecionado..."
    );
    setTimeout(function () {
      window.location.href = "index.html";
    }, 3000);
  }
}
function mask(o, f) {
  setTimeout(function () {
    var v = mphone(o.value);
    if (v != o.value) {
      o.value = v;
    }
  }, 1);
}

function mphone(v) {
  var r = v.replace(/\D/g, "");
  r = r.replace(/^0/, "");
  if (r.length > 10) {
    r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (r.length > 5) {
    r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
  } else if (r.length > 2) {
    r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
  } else {
    r = r.replace(/^(\d*)/, "($1");
  }
  return r;
}
