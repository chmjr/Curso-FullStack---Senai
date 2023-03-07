import { Pedidos } from "../models/pedido.js";

export class PedidosController {
  #id;
  #dataHora;
  #campoPizza;
  #campoMassa;
  #campoBorda;
  #campoNome;
  #campoEmail;
  #campoTelefone;
  #campoCep;
  #campoRua;
  #campoNumero;
  #campoBairro;
  #campoCidade;
  #campoEstado;
  #campoValor;
  #listaPedidos;

  constructor() {
    this.#id = 0; //Gerado Automático
    this.#dataHora = new Date(); //Busca Automático
    this.#campoPizza = document.getElementById("campoPizza");
    this.#campoMassa = document.getElementById("campoMassa");
    this.#campoBorda = document.getElementById("campoBorda");
    this.#campoNome = document.getElementById("campoNome");
    this.#campoEmail = document.getElementById("campoEmail");
    this.#campoTelefone = document.getElementById("campoTelefone");
    this.#campoCep = document.getElementById("campoCep");
    this.#campoRua = document.getElementById("campoRua");
    this.#campoNumero = document.getElementById("campoNumero");
    this.#campoBairro = document.getElementById("campoBairro");
    this.#campoCidade = document.getElementById("campoCidade");
    this.#campoEstado = document.getElementById("campoEstado");
    this.#campoValor = document.getElementById("campoValor");
    // this.#listaPedidos = new ListaPedidos();
  }

  criarPedido() {
    const pedidos = JSON.parse(localStorage.getItem("Pedidos")) || [];
    /*let maiorId = this.#listaPedidos.pedidos.reduce(
      //Reduce faz retornar o valor do acumulador e depois o .max retorna o maior numero dentro do array
      (acumulador, negociacao) => {
        return Math.max(acumulador, negociacao.id);
      },
      0
    );
    let id = maiorId + 1;
    */
    var id = this.#id;
    var data = this.#dataHora;
    let nome = this.#campoNome.value;
    let pizza = this.#campoPizza.value;
    let massa = this.#campoMassa.value;
    let borda = this.#campoBorda.value;
    let email = this.#campoEmail.value;
    let telefone = this.#campoTelefone.value;
    let cep = this.#campoCep.value;
    let rua = this.#campoRua.value;
    let numero = this.#campoNumero.value;
    let bairro = this.#campoBairro.value;
    let cidade = this.#campoCidade.value;
    let estado = this.#campoEstado.value;
    let valor = this.#campoValor.value;
    var pedido = new Pedidos(
      id,
      data,
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
    ); //Monta objeto negociação
    console.log(pedido);
    pedidos.push(pedido);
    console.log(pedidos);
    //connectToDatabase();
    localStorage.setItem(
      "Pedidos",
      JSON.stringify({ nome: pedido.getNome(), pizza: pedido.getPizza() })
    );
    const items = JSON.parse(localStorage.getItem("Pedidos")) || [];
    const ultimoItem = items[items.length - 1];
    console.log(ultimoItem);
    /* pedidos = JSON.parse(localStorage.getItem("Pedidos"));
    //    var pedidosParse = JSON.parse(localStorage.getItem("Pedidos"));
    console.log(pedidos[pedidos.length - 1]);
    */
  }
}
