var mongoose = require("mongoose");

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
    _uid: [
        {
            type: mongoose.Schema.Types.ObjectId
        }
    ]
})

var Torneo = module.exports = mongoose.model('Torneo', torneoSchema)