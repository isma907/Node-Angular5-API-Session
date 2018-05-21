var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId },
    Nombre: {
        type: String,
    },
    Imagen: {
        type: String,
    },
    Apellido: {
        type: String,
    },
    Username: {
        type: String,
    },
    password: {
        type: String,
    },
})

var User = module.exports = mongoose.model('User', userSchema)