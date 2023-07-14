const axios = require("axios")
const caracters = require("./characters.json");

module.exports = {
  list: async () => {
    const results = await axios.get("http://database:8004/Character")
    return results.data;
  },
  create: async () => {
    throw Error("error en la DB al crear el personaje"); // se dice que hay un erroe ne la DB porque no hay forma de que se alcance esta instancia si el cliente no ha enviado un dato necesario// si no me han dado un nombre por ejemplo yo no podria llegar aqui. Los middlewares impediran que la request llegue hasta aqui
  },
};
