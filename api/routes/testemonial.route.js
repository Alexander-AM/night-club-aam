var { getAllTestemonials } = require("../controllers/testemonial.controller");

module.exports = function(router) {
	router.get("/testemonials", getAllTestemonials);
};
