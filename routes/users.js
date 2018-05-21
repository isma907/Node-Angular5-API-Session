const router = require("express").Router();
// const mongojs = require("mongojs");
// const db = mongojs("mongo-test", ["users"])
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/mongo-test');
const User = require("../models/User")
const bcrypt = require("bcrypt-nodejs")
//MODELS

const Authorize = function (req, res, next) {
    if (req.session.user) {
        next();
    }
    else {
        res.send(401)
    }

}

router.get("/", Authorize, (req, res, next) => {
    User.find((err, users) => {
        if (err) return next(err);
        res.json(users)
    })
})


router.post("/Login", (req, res, next) => {
    var usuario = req.body.Username;
    var password = req.body.Password;

    User.authenticate(usuario, password, function (error, user) {
        if (error || !user) {
            var err = new Error('Wrong email or password.');
            err.status = 401;
            return next(err);
        } else {
            const userSession = {
                Username: user.Username,
                Nombre: user.Nombre,
                Apellido: user.Nombre,
            };
            req.session.user = userSession;
            return next(res.send(userSession));
        }
    });
})

router.get("/getUserById/:id", (req, res, next) => {
    User.findOne({ _id: req.params.id }, (err, users) => {
        if (err) return next(err);
        res.json(users)
    })
})

router.post("/addUser", (req, res, next) => {
    const user = req.body;
    user._id = mongoose.mongo.ObjectId();
    User.create(user, (err, user) => {
        if (err) return next(err);
        res.json(user)
    })
})

router.delete("/deleteUser/:id", (req, res, next) => {
    const user = req.body;
    User.remove({ _id: req.params.id }, (err, user) => {
        if (err) return next(err);
        res.json(user)
    })
})

router.put("/updateUser/:id", (req, res, next) => {
    const user = req.body;
    const id = user.id;
    delete user["_id"];
    User.update({ _id: req.params.id }, user, {}, (err, user) => {
        if (err) return next(err);
        res.json(user)
    })
})



module.exports = router;