import { Negociacao } from "../models/negociacao.js";
import { ListaNegociacoes } from "../models/listaNegociacoes.js";
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
    let data = new Date(
      this.#campoData.value + "T00:00:00-03:00"
    ).toLocaleDateString();
    let qtd = this.#campoQtd.value;
    let valor = this.#campoValor.value;
    let ticker = this.#campoTicker.value;
    let negociacao = new Negociacao(data, qtd, valor, ticker); //Monta objeto negociação
    this.#listaNegociacoes.adicionar(negociacao); //Joga objeto para a função adicionar
    console.log(negociacao);
  }
}
