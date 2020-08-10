var { getSingleEvent, getAllEvents } = require("../controllers/event.controller");

module.exports = function(router) {
	router.get("/events/:id", getSingleEvent);
	router.get("/events", getAllEvents);
};
