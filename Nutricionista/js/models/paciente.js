export class Paciente {
  #nome;
  #sobrenome;
  #peso;
  #altura;
  #imc;
  constructor(nome, sobrenome, peso, altura, imc) {
    this.#nome = nome;
    this.#sobrenome = sobrenome;
    this.#peso = peso;
    this.#altura = altura;
    this.#imc = imc;
  }

  get nome() {
    return this.#nome;
  }
  get sobrenome() {
    return this.#sobrenome;
  }
  get peso() {
    return this.#peso;
  }
  set peso(peso) {
    return (this.#peso = peso);
  }
  get altura() {
    return this.#altura;
  }
  get imc() {
    return this.#imc;
  }
  set imc(imc) {
    return (this.#imc = imc);
  }
}
