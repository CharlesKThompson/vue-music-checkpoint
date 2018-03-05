var express = require("express")
var  bp = require("body-parser")
var cors = require('cors')
var  server = express()
require("./server/server-assets/db/mlab-config")
var  port = 3000
//var session = require('./server/server-assets/auth/session')
//var authRotes = require('./server/server-assets/auth/routes')
var ItunesRoutes = require('./server/server-assets/routes/Itunes')
var myTunesRoutes = require('./server/server-assets/routes/myTunes')


server.use(cors());
//server.use(session)
server.use(bp.json());
server.use(bp.urlencoded({ extended: true }));

//server.use(authRotes)

//Your routes here
server.use(ItunesRoutes.router)
server.use(myTunesRoutes.router)


server.use('*', (err, req, res, next) => {
    res.status(400).send(err);
  });
  
server.listen(port, () => {
    console.log("the server is running on port:", port);
  });