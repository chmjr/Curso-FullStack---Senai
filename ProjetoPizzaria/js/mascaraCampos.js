function mphone(telefone) {
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
  return telefone;
}

function mascaraCep() {
  var cep = document.getElementById("campoCep");

  // Remove todos os caracteres que não são números do valor do CEP
  cep.value = cep.value.replace(/\D/g, "");

  // Adiciona o "-" na posição correta do CEP
  if (cep.value.length > 5) {
    cep.value = cep.value.substring(0, 5) + "-" + cep.value.substring(5);
  }
}

function autocomplete(inp, arr) {
  /* Executar a função quando o usuário digitar algo no campo de entrada */
  inp.addEventListener("input", function () {
    let val = this.value;
    /* Fechar a lista anteriormente aberta */
    closeAllLists();
    if (!val) {
      return false;
    }
    let matches = arr.filter(
      (sabor) => sabor.toLowerCase().indexOf(val.toLowerCase()) !== -1
    );
    /* Criação do container de sugestões */
    let list = document.createElement("div");
    list.setAttribute("class", "autocomplete-items");
    /* Inserir o container como filho do campo de entrada */
    this.parentNode.appendChild(list);
    /* Iterar sobre as sugestões e criar elementos */
    for (let i = 0; i < matches.length; i++) {
      /* Criar uma div para cada sugestão */
      let suggestion = document.createElement("div");
      /* Inserir o nome da sugestão no elemento */
      suggestion.innerHTML = matches[i];
      /* Executar uma função quando a sugestão for clicada */
      suggestion.addEventListener("click", function () {
        /* Inserir o valor da sugestão no campo de entrada */
        inp.value = this.innerHTML;
        /* Fechar a lista de sugestões */
        closeAllLists();
      });
      list.appendChild(suggestion);
    }
  });

  /* Executar a função quando o usuário clicar em qualquer lugar da página */
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });

  /* Função para fechar todas as listas de sugestões, exceto a fornecida como argumento */
  function closeAllLists(element) {
    let lists = document.getElementsByClassName("autocomplete-items");
    for (let i = 0; i < lists.length; i++) {
      if (element !== lists[i] && element !== inp) {
        lists[i].parentNode.removeChild(lists[i]);
      }
    }
  }
}
