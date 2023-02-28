export class Negociacao {
  #data;
  #qtd;
  #valor;
  #ticker;

  constructor(data, qtd, valor, ticker) {
    this.#data = data;
    this.#qtd = qtd;
    this.#valor = valor;
    this.#ticker = ticker;
  }

  get data() {
    return this.#data;
  }
  get qtd() {
    return this.#qtd;
  }
  get valor() {
    return this.#valor;
  }
  get ticker() {
    return this.#ticker;
  }
}
