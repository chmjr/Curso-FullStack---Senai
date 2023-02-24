import { Paciente } from "../models/paciente.js";

let paciente = new Paciente("Maria", "Silva", 90, 1.85);
console.log(paciente.nome);
paciente.peso = 50;
console.log(paciente.nome);
console.log(paciente);
