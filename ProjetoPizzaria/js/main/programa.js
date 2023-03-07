import { PedidosController } from "../controller/pedidoController.js";

const botao = document.querySelector("#btnConcluir");
const controller = new PedidosController();

botao.addEventListener("click", () => {
  event.preventDefault();
  controller.criarPedido();
});
