const { SchemaTypes } = require("mongoose");

const { Schema } = require("mongoose");

const characterSchema = new Schema({
  _id: String,
  name: String,
  height: String,
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  gender: String,
  homeworld: { type: String, ref: "Planet" },
  films: [{ type: String, ref: "Film" }],
});

/* esta funcion va a popular automaticamente lo que necesitamos en la respuesta para que siempre vayan todos las datos ya que al ser un microservicio seria dificil pedir exactamante tods los datos cada vez/// al hacer character.list estaremos accediendo al metodo del modelo. despues donde lo ejecutemos en lugar de hacer Character.find() sera .list()*/
characterSchema.statics.list = async function () {
  return await this.find()
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};
//si quiero que esto reciba un id y busque solo 1 puedo usar el metodo get
characterSchema.statics.get = async function (id) {
  return await this.findById(id)
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};
characterSchema.statics.insert = async function (character) {
   return await this.create(character)
    
}; 



module.exports = characterSchema;
