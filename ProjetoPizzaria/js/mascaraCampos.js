function mphone(v) {
  //Mascara para input telefone
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

function mascaraCep() {
    var cep = document.getElementById("cep");
  
    // Remove todos os caracteres que não são números do valor do CEP
    cep.value = cep.value.replace(/\D/g, "");
  
    // Adiciona o "-" na posição correta do CEP
    if (cep.value.length > 5) {
      cep.value = cep.value.substring(0, 5) + "-" + cep.value.substring(5);
    }
  }