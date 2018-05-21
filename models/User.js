var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs")

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
    Password: {
        type: String,
    },
})


//hashing a password before saving it to the database
userSchema.pre('save', function (next) {
    var user = this;
    bcrypt.hash(user.Password, null, null, function (err, hash) {
        if (err) {
            return next(err);
        }
        user.Password = hash;
        next();
    })
});

var User = module.exports = mongoose.model('User', userSchema)