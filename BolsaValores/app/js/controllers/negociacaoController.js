import { Negociacao } from "../models/negociacao.js";
import { ListaNegociacoes } from "../models/listaNegociacoes.js";
//import { generate as generateId } from "../../../../node_modules/shortid/index.js";
export class NegociacaoController {
  #campoData;
  #campoQtd;
  #campoValor;
  #campoTicker;
  #listaNegociacoes;

  constructor() {
    this.#campoData = document.getElementById("dtNeg");
    this.#campoQtd = document.getElementById("qtdAcoes");
    this.#campoValor = document.getElementById("vlNeg");
    this.#campoTicker = document.getElementById("list");
    this.#listaNegociacoes = new ListaNegociacoes();
  }

  criarNegociacao() {
    let maiorId = this.#listaNegociacoes.negociacoes.reduce(
      //Reduce faz retornar o valor do acumulador e depois o .max retorna o maior numero dentro do array
      (acumulador, negociacao) => {
        return Math.max(acumulador, negociacao.id);
      },
      0
    );
    let id = maiorId + 1;
    let data = new Date(
      this.#campoData.value + "T00:00:00-03:00"
    ).toLocaleDateString();
    let qtd = this.#campoQtd.value;
    let valor = this.#campoValor.value;
    let ticker = this.#campoTicker.value;
    let negociacao = new Negociacao(id, data, qtd, valor, ticker); //Monta objeto negociação
    this.#listaNegociacoes.adicionar(negociacao); //Joga objeto para a função adicionar

    this.atualizarTabelaNegociacoes();
    document.getElementById("dtNeg").value = "";
    document.getElementById("qtdAcoes").value = "";
    document.getElementById("vlNeg").value = "";
    document.getElementById("ticker").value = "";
    document.getElementById("list").value = "";
  }

  atualizarTabelaNegociacoes() {
    let tabela = document.createElement("table");
    tabela.classList.add("tabela-negociacoes"); // adiciona classe CSS para a tabela

    const cabecalho = tabela.createTHead();
    const linhaCabecalho = cabecalho.insertRow();
    const colunaId = linhaCabecalho.insertCell();
    colunaId.innerHTML = "ID";
    colunaId.classList.add("tabela-negociacoes-cabecalho");
    const colunaTicker = linhaCabecalho.insertCell();
    colunaTicker.innerHTML = "Ticker";
    colunaTicker.classList.add("tabela-negociacoes-cabecalho"); // adiciona classe CSS para a célula
    const colunaData = linhaCabecalho.insertCell();
    colunaData.innerHTML = "Data";
    colunaData.classList.add("tabela-negociacoes-cabecalho"); // adiciona classe CSS para a célula
    const colunaQtd = linhaCabecalho.insertCell();
    colunaQtd.innerHTML = "Quantidade";
    colunaQtd.classList.add("tabela-negociacoes-cabecalho"); // adiciona classe CSS para a célula
    const colunaValor = linhaCabecalho.insertCell();
    colunaValor.innerHTML = "Valor";
    colunaValor.classList.add("tabela-negociacoes-cabecalho"); // adiciona classe CSS para a célula
    const colunaAcoes = linhaCabecalho.insertCell();
    colunaAcoes.innerHTML = "Ações";
    colunaAcoes.classList.add("tabela-negociacoes-cabecalho"); // adiciona classe CSS para a célula

    let corpo = tabela.createTBody();
    this.#listaNegociacoes.negociacoes.forEach((negociacao) => {
      let linha = corpo.insertRow();
      let colunaId = linha.insertCell();
      colunaId.innerHTML = negociacao.id;
      let colunaTicker = linha.insertCell();
      colunaTicker.innerHTML = negociacao.ticker;
      let colunaData = linha.insertCell();
      colunaData.innerHTML = negociacao.data;
      let colunaQtd = linha.insertCell();
      colunaQtd.innerHTML = negociacao.qtd;
      let colunaValor = linha.insertCell();
      colunaValor.innerHTML = negociacao.valor;
      var colunaAcoes = linha.insertCell();
      let linkExcluir = document.createElement("a"); // cria um link para excluir
      linkExcluir.href = "#"; // define o atributo href do link
      linkExcluir.innerHTML = "Excluir"; // define o texto do link
      linkExcluir.onclick = () => {
        // define a função onclick do link
        this.excluirNegociacao(negociacao.id); // chama a função que exclui a linha
      };
      colunaAcoes.appendChild(linkExcluir);
    });
    let tabelaNegociacoes = document.getElementById("tabelaNegociacoes");
    tabelaNegociacoes.innerHTML = ""; // clear existing table
    tabelaNegociacoes.appendChild(tabela);
  }

  excluirNegociacao(id) {
    const indice = this.#listaNegociacoes.negociacoes.findIndex( //findIndex retorna -1 se não achou o indice e se achou retorna o indice
      (negociacao) => negociacao.id === id
    );
    if (indice !== -1) {
      this.#listaNegociacoes.negociacoes.splice(indice, 1); //Splice apaga o array com o indice como parametro
      this.atualizarTabelaNegociacoes();
    }
  }
}
