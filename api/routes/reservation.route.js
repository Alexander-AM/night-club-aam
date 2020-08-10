var { createReservation, getReservations } = require("../controllers/reservation.controller");

module.exports = function(router) {
	router.get("/reservations", getReservations);
	router.post("/reservations", createReservation);
};
