
export class ListaPacientes {
    #pacientes = [];

    adicionar (paciente){
        this.#pacientes.push(paciente); //Adicionando o objeto paciente no array
    }

    get pacientes(){
        return [].concat(this.#pacientes); //Protegendo o array, retornando uma cópia do array original
    }
}