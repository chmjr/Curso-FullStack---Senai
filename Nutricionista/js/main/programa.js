import { PacienteController } from "../controllers/pacienteController.js";

const botao = document.querySelector("#btnAdd");
const controller = new PacienteController();

botao.addEventListener("click", () => {
  event.preventDefault();
  controller.criarPaciente();
});
