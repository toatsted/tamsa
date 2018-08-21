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
}
