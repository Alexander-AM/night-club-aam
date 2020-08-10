var { createNewsletter, getAllNewsletters } = require("../controllers/newsletter.controller");

module.exports = function(router) {
	router.get("/newsletters", getAllNewsletters);
	router.post("/newsletters", createNewsletter);
};
