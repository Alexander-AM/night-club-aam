var router = require("express").Router();
var { readdir } = require("fs");
var { join } = require("path");
var { requestLogger } = require("./config/winston");
var formidable = require("./config/formidable");

router.use(requestLogger);
router.use(formidable);

readdir(join(__dirname, "routes"), routesIterator);

function routesIterator(err, files) {
	if (err) {
		throw err;
	}

	files.forEach(file => requireRoute(file));
}

function requireRoute(file) {
	require(join(__dirname, "routes", file))(router);
}

module.exports = router;
