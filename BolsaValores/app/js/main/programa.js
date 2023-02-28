import { NegociacaoController } from "../controllers/negociacaoController.js";

const botao = document.querySelector("#btnAdd");
const controller = new NegociacaoController();

botao.addEventListener("click", () => {
  event.preventDefault();
  controller.criarNegociacao();
});
