export class ListaNegociacoes {
    #negociacoes = []; //Array privado

adicionar (negociacao){
    this.#negociacoes.push(negociacao); //Adicionando o objeto paciente no array
}

get pacientes(){
    return [].concat(this.#negociacoes); //Protegendo o array, retornando uma cópia do array original
}
}