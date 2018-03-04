var router = require("express").Router()
var myTunes = require("../models/myTunes")


router.post("api/itunes/", (req, res, next) => {
    req.body.creatorId = req.session.uid

    myTunes.create(req.body)
    .then(itune => {
        res.send(itune)
    })
    .catch(next)
}),

module.exports = { router }