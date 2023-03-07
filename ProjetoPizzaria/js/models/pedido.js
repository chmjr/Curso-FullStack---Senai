export class Pedidos {
  #id;
  #dataHora;
  #pizza;
  #massa;
  #borda;
  #nome;
  #email;
  #telefone;
  #cep;
  #rua;
  #numero;
  #bairro;
  #cidade;
  #estado;
  #valor;

  constructor(
    id,
    dataHora,
    pizza,
    massa,
    borda,
    nome,
    email,
    telefone,
    cep,
    rua,
    numero,
    bairro,
    cidade,
    estado,
    valor
  ) {
    this.#id = id;
    this.#dataHora = dataHora;
    this.#pizza = pizza;
    this.#massa = massa;
    this.#borda = borda;
    this.#nome = nome;
    this.#email = email;
    this.#telefone = telefone;
    this.#cep = cep;
    this.#rua = rua;
    this.#numero = numero;
    this.#bairro = bairro;
    this.#cidade = cidade;
    this.#estado = estado;
    this.#valor = valor;
  }

  // getter methods
  get id() {
    return this.#id;
  }

  get dataHora() {
    return this.#dataHora;
  }

  get pizza() {
    return this.#pizza;
  }

  get massa() {
    return this.#massa;
  }

  get borda() {
    return this.#borda;
  }
  get nome() {
    return this.#nome;
  }

  get email() {
    return this.#email;
  }

  get telefone() {
    return this.#telefone;
  }

  get cep() {
    return this.#cep;
  }

  get rua() {
    return this.#rua;
  }

  get numero() {
    return this.#numero;
  }

  get bairro() {
    return this.#bairro;
  }

  get cidade() {
    return this.#cidade;
  }

  get estado() {
    return this.#estado;
  }

  get valor() {
    return this.#valor;
  }

  // setter methods
  set pizza(newPizza) {
    this.#pizza = newPizza;
  }

  set nome(newNome) {
    this.#nome = newNome;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }

  set telefone(newTelefone) {
    this.#telefone = newTelefone;
  }

  set cep(newCep) {
    this.#cep = newCep;
  }

  set rua(newRua) {
    this.#rua = newRua;
  }

  set numero(newNumero) {
    this.#numero = newNumero;
  }

  set bairro(newBairro) {
    this.#bairro = newBairro;
  }

  set cidade(newCidade) {
    this.#cidade = newCidade;
  }

  set estado(newEstado) {
    this.#estado = newEstado;
  }

  set valor(newValor) {
    this.#valor = newValor;
  }
}
