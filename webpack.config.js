const path = require("path");

module.exports = {
	entry: "./main.js",
	output:{
		// path: path.join(__dirname,"public"),
		filename: "bundle.js",
	},
	module: {
	  rules: [
	    { exclude: /node_modules/, loader: "babel-loader" }
	  ]
	},
}