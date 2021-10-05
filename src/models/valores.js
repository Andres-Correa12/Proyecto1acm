const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Valor = new Schema({
    Nombre: String,
    Tipo_Mascota: String,
    Sexo:String,
    Edad:Int32Array,
    Peso_Kg: Int32Array,
    Raza:String
});
module.exports =mongoose.model('ProAnd',Valor);