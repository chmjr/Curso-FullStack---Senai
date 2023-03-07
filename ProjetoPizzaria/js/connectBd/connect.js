const mongoose = require("mongoose"); //Chamando a função Mongoose que faz a intermediação com o BD

//CONEXAO COM O BANCO MONGODB
const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGOBD_PASSWORD}@cluster0.uhpi9mz.mongodb.net/?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log("Ocorreu erro na Conexão BD", error);
      }
      return console.log("Conexão ao Banco de dados realizada com sucesso");
    }
  );
};
module.exports = connectToDatabase;
