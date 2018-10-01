const express = require("express");
const bodyParser = require("body-parser");
const chalk = require("chalk");
const path = require("path");
const ip = require("ip");

const app = express();
const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(`${__dirname}/public`)));

require("./routing/api")(app);
require("./routing/html")(app);

app.listen(PORT, () => {
	console.log(`
	Local: localhost:${PORT}
	On Your Network: ${ip.address()}:${PORT}
		`);
});
