var mongoose = require("mongoose");
var User = require("./User");

var torneoSchema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId },
    Nombre: {
        type: String,
        required: true
    },
    Modalidad: {
        type: String,
        required: true
    },
    partic: {
        type: Array
    }
})

var Torneo = module.exports = mongoose.model('Torneo', torneoSchema)