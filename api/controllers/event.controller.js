var Event = require("../models/event.model");

async function getSingleEvent(req, res, next) {
	try {
		let event = await Event.findByPk(parseInt(req.params.id));
		res.json(event);
	} catch (error) {
		console.log(error);
		res.status(500).end();
	}
}

async function getAllEvents(req, res, next) {
	try {
		let events = await Event.findAll();
		res.json(events);
	} catch (error) {
		console.log(error);
		res.status(500).end();
	}
}

module.exports = {
	getSingleEvent,
	getAllEvents
};
