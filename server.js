const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const ip = require("ip");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(`${__dirname}/public`)));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routing/api")(app);
require("./routing/html")(app);

app.listen(PORT, () => {
	console.log(`
	Local: localhost:${ PORT }
	On Your Network: ${ ip.address() }:${PORT}
		`);
});
