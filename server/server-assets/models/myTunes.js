var mongoose = require('mongoose')
var Schema = mongoose.Schema
var SchemaName = "myTunes"
var ObjectId = mongoose.SchemaTypes.ObjectId


var schema = new Schema ({
   artistName: {type: String, required: true} ,
   collectionName: {type: String},
   trackName: {type: String, required: true},
   previewUrl: {type: String},
   artworkUrl60: {type: String}
})

module.exports = mongoose.model(SchemaName, schema)