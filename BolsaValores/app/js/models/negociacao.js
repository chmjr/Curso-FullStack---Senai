export class Negociacao {
  #id;
  #data;
  #qtd;
  #valor;
  #ticker;

  constructor(id, data, qtd, valor, ticker) {
    this.#id = id;
    this.#data = data;
    this.#qtd = qtd;
    this.#valor = valor;
    this.#ticker = ticker;
  }
  get id() {
    return this.#id;
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
