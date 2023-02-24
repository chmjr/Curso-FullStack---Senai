function validarEmail(email) {
  // expressão regular para validar email
  const regexEmail = /\S+@\S+\.\S+/;
  return regexEmail.test(email);
}

function validarNome(nome) {
  // expressão regular para validar nome (somente letras, espaço e hífen)
  const regexNome = /^[a-zA-Zà-úÀ-Ú]+([ '-][a-zA-Zà-úÀ-Ú]+)*$/;
  return regexNome.test(nome);
}

// Função que busca o endereço com base no CEP informado
function buscarEndereco() {
  // Obter o valor do CEP informado pelo usuário
  var cep = document.getElementById("cep").value;
  cep = cep.replace("-", "").replace(".", "");
  // Validar o CEP pela faixa desejada (88000-000 a 88099-999)
  if (/^88[0-8]\d{5}$/.test(cep)) {
    // Montar a URL da API com o CEP informado
    var url = "https://viacep.com.br/ws/" + cep + "/json/";

    // Fazer a requisição HTTP GET na API ViaCEP
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Preencher os campos do formulário com os dados do endereço
        document.getElementById("rua").value = data.logradouro;
        document.getElementById("bairro").value = data.bairro;
        document.getElementById("cidade").value = data.localidade;
        document.getElementById("estado").value = data.uf;
        document.getElementById("numero").focus();
      })
      .catch((error) => {
        console.log("Erro ao buscar endereço: " + error.message);
      });
  } else {
    // CEP inválido para a faixa desejada
    alert("CEP inválido para a faixa de CEPs desejada!");
  }
}
