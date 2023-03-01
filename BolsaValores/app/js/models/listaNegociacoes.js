export class ListaNegociacoes {
  #negociacoes = []; //Array privado

  adicionar(negociacao) {
    this.#negociacoes.push(negociacao); //Adicionando o objeto paciente no array
  }

  get negociacoes() {
    return this.#negociacoes; // Para apagar o array tive que deixar ele apagar o original
    //return [].concat(this.#negociacoes); //Protegendo o array, retornando uma cópia do array original
  }
}
