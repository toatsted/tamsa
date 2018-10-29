let path = require("path");

module.exports = function(app) {
	app.get("/", (req, res) => {
    res.render("index");
	})

	app.get("/legislature", (req, res) => {
    res.render("legislature");
	})

	app.get("/about", (req, res) => {
    res.render("about");
	})

	app.get("/media", (req, res) => {
    res.render("media");
	})

	app.get("/help", (req, res) => {
    res.render("help");
	})

	app.get("/legPriorities", (req, res) => {
    res.render("legPriorities");
	})

	app.get("/billTracker", (req, res) => {
    res.render("billTracker");
	})

	app.get("/legCommittees", (req, res) => {
    res.render("legCommittees");
	})

	app.get("/resources", (req, res) => {
    res.render("resources");
	})
}
