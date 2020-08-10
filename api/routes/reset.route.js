var { reset } = require("../controllers/reset.controller");

module.exports = function(router) {
	router.get("/reset", reset);
};
