const express = require("express");
const bodyParser = require("body-parser");
const chalk = require("chalk");
const path = require("path");

const app = express();
const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(`${__dirname}/public`)));

require("./routing/api")(app);
require("./routing/html")(app);

app.listen(PORT, () => {
	console.log(chalk.underline(chalk.bgHex('#442fce')
		(`
	Local: localhost:${PORT}
	On Your Network: 192.168.1.100:${PORT}
		`)));
});