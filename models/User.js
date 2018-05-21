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



userSchema.statics.authenticate = function (username, password, callback) {
    User.findOne({ Username: username })
        .exec(function (err, user) {
            if (err) {
                return callback(err)
            } else if (!user) {
                var err = new Error('User not found.');
                err.status = 401;
                return callback(err);
            }
            bcrypt.compare(password, user.Password, function (err, result) {
                if (result === true) {
                    return callback(null, user);
                } else {
                    return callback();
                }
            })
        });
}


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