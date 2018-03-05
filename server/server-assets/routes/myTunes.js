var router = require("express").Router()
var myTunes = require("../models/myTunes")


router.post("api/mytunes/", (req, res, next) => {

    myTunes.create(req.body)
    .then(itune => {
        res.send(itune)
    })
    .catch(next)
    }),

router.get("api/myTunes", (req, res, next) => {
    myTunes.findById(req.params.itune)
    .then(itune => {
        return res.send(itune)
    })
    .catch(next)
})


module.exports = { router }