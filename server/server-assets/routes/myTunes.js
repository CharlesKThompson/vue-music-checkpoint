var router = require("express").Router()
var Comments = require("../models/myTunes")


router.post("api/itunes/", (req, res, next) => {
    req.body.creatorId = req.session.uid

    Itunes.create(req.body)
    .then(itune => {
        res.send(itune)
    })
    .catch(next)
}),

module.exports = { router }