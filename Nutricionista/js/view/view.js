export class PacienteView {
  constructor() {}

  atualizarTabela(pacientes) {
    const tabela = document
      .getElementById("table")
      .getElementsByTagName("tbody")[0];
    console.log(pacientes);
    pacientes.forEach((paciente) => {
      const linha = tabela.insertRow();
      const colunaNome = linha.insertCell(0);
      colunaNome.innerHTML = paciente.nome;
      const colunaSobrenome = linha.insertCell(1);
      colunaSobrenome.innerHTML = paciente.sobrenome;
      const colunaPeso = linha.insertCell(2);
      colunaPeso.innerHTML = paciente.peso;
      const colunaAltura = linha.insertCell(3);
      colunaAltura.innerHTML = paciente.altura;
    });
  }
}
