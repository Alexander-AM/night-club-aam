var Reservation = require("../models/reservation.model");

async function getReservations(req, res, next) {
	let reservations = await Reservation.findAll();
	res.json(reservations);
}

async function createReservation(req, res, next) {
	try {
		let reservation = await Reservation.create(req.fields);
		res.status(201).json(reservation)
	} catch (error) {
		console.error(error);
		res.status(400).end();
	}
}

module.exports = {
	getReservations,
	createReservation
};
