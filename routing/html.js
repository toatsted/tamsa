let path = require("path");

module.exports = function(app) {
	app.get("/", (req, res) => {
		res.sendFile(path.join(__dirname + 
			"/../pages/index.html"));
	})

	app.get("/legislature", (req, res) => {
		res.sendFile(path.join(__dirname +
			"/../pages/legislature.html"))
	})

	app.get("/blog", (req, res) => {
		res.sendFile(path.join(__dirname +
			"/../pages/blog.html"))
	})

	app.get("/about", (req, res) => {
		res.sendFile(path.join(__dirname +
			"/../pages/about.html"))
	})

	app.get("/media", (req, res) => {
		res.sendFile(path.join(__dirname +
			"/../pages/meida.html"))
	})
}