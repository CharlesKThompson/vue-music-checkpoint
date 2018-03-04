var router = require("express").Router()
var Itunes = require("../models/Itunes")
var myTunes = require("../models/myTunes")


//GET ALL USERS
router.get("api/itunes", (req, res, next) => {
    Itunes.find(req.query)
    .then(itunes => {
        return res.send(itunes)
    })
    .catch(next)
})

//GET ONE SONG
router.get("api/itunes/:itunesid", (req, res, next) => {
    Itunes.findById(req.params.itunes.id)
    .then(itune => {
        return res.send(itune)
    })
    .catch(next)
}),

//CREAT A SONG
router.post("api/itunes/", (req, res, next) => {
    req.body.creatorId = req.session.uid

    Itunes.create(req.body)
    .then(itune => {
        res.send(itune)
    })
    .catch(next)
}),

//POST A SONG
router.post("api/itunes/:ituneid/mytunes/:mytuneid", (req, res, next) => {
    Itunes.create(req.body)
    .then(itune => {
        res.send(itune)
    })
    .catch(next)
}),

// DELETE A SONG
router.delete("api/itunes/:ituneid/mytunes/:mytuneid", (req, res, next) => {
    Itunes.findByIdAndRemove(req.params.ituneid)
    .then(comment => {
        res.send({message: "Successfully deleted song"})
    })
    .catch(next)
}),

//PUT A SONG
router.put("api/itunes/:itunesid/mytunes:/mytuneid", (req, res, next) => {
    myTunes.findByIdAndUpdate(req.params.mytuneid, req.body, {new: true})
    .then(itune => {
        res.send({message: "Successfully updated song", data: itune})
    })
})

module.exports = { router }