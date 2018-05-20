var mongoose = require("mongoose");

var torneoSchema = mongoose.Schema({
    _id: { type: String },
    nombre: {
        type: String,
        required: true
    },
    modalidad: {
        type: String,
        required: true
    }
})

var Torneo = module.exports = mongoose.model('Torneo', torneoSchema)