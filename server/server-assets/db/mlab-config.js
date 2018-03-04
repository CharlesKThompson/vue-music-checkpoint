var mongoose = require("mongoose");
var connectionString = "mongodb://chuckinator:chuckinator32@ds012578.mlab.com:12578/music-vue";
var connection = mongoose.connection;

mongoose.connect(connectionString);

connection.on("error", err => {
  console.error("mlab Error: ", err);
});

connection.once("open", () => {
  console.log("connected to database!");
});
