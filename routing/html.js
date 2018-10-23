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
			"/../pages/media.html"))
	})

	app.get("/help", (req, res) => {
		res.sendFile(path.join(__dirname +
			"/../pages/help.html"))
	})

	app.get("/legPriorities", (req, res) => {
		res.sendFile(path.join(__dirname +
			"/../pages/legPriorities.html"))
	})

	app.get("/billTracker", (req, res) => {
		res.sendFile(path.join(__dirname +
			"/../pages/billTracker.html"))
	})

	app.get("/legCommittees", (req, res) => {
		res.sendFile(path.join(__dirname +
			"/../pages/legCommittees.html"))
	})

	app.get("/resources", (req, res) => {
		res.sendFile(path.join(__dirname +
			"/../pages/resources.html"))
	})
}
