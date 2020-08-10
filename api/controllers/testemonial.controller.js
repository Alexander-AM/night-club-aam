var Testemonial = require("../models/testemonial.model");

async function getAllTestemonials(req, res, next) {
	let testies = await Testemonial.findAll();
	res.json(testies);
}

module.exports = {
	getAllTestemonials
};
