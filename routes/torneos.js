const router = require("express").Router();
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/mongo-test');
const Torneo = require("../models/Torneos")

router.get("/", (req, res, next) => {
    Torneo.find((err, torneos) => {
        if (err) return next(err);
        res.json(torneos)
    })
})

router.get("/getParticipantes/:id", (req, res, next) => {
    Torneo.aggregate()
        .match({ "_id": mongoose.Types.ObjectId(req.params.id) })
        .lookup({
            from: "users",
            localField: "participantes",
            foreignField: "_id",
            as: "partic"
        })
        .project({
            partic: {
                Password: 0,
                _id: 0
            },
            participantes: 0
        }).exec((err, torneos) => {
            if (err) return next(err);
            res.json(torneos)
        }, (err, torneos) => {
            if (err) return next(err);
            res.json(torneos)
        })
})

router.get("/getTorneoById/:id", (req, res, next) => {
    Torneo.findOne({ _id: req.params.id }, (err, torneos) => {
        if (err) return next(err);
        res.json(torneos)
    }, (err, torneos) => {
        if (err) return next(err);
        res.json(torneos)
    })
})

router.post("/addTorneo", (req, res, next) => {
    const torneo = req.body;
    torneo._id = mongoose.mongo.ObjectId();
    console.log(torneo)
    Torneo.create(torneo, (err, torneo) => {
        if (err) return next(err);
        res.json(torneo)
    })
})

router.delete("/deleteTorneo/:id", (req, res, next) => {
    const torneo = req.body;
    Torneo.remove({ _id: req.params.id }, (err, torneo) => {
        if (err) return next(err);
        res.json(torneo)
    })
})

router.put("/updateTorneo/:id", (req, res, next) => {
    const torneo = req.body;
    delete torneo["_id"];
    Torneo.update({ _id: req.params.id }, torneo, {}, (err, torneo) => {
        if (err) return next(err);
        res.json(torneo)
    })
})

router.put("/TorneoAddPlayer/:id", (req, res, next) => {
    const playerId = req.session.user.id;
    const torneoId = req.params.id;
    Torneo.update(
        { _id: torneoId },
        {
            $addToSet: { 'participantes': playerId }
        },
        (err, torneo) => {
            if (err) return next(err);
            res.json(torneo)
        })
})


module.exports = router;