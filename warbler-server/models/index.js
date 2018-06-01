const mongoose = require("mongoose");
mongoose.set("debug", true); //see mongo queries being run in terminal
mongoose.Promise = Promise;  //important, using es17 async can be used
mongoose.connect("mongodb://localhost/warbler", {
	keepAlive: true
});

module.exports.User = require("./user");
module.exports.Message = require("./message");
