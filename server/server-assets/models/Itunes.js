var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = mongoose.SchemaTypes.ObjectId
var SchemaName = "Itunes"


var schema = new Schema ({
   artistName: {type: String, required: true} ,
   
})