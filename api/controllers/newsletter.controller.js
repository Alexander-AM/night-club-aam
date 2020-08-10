var Newsletter = require("../models/newsletter.model");

async function getAllNewsletters(req, res, next) {
	let emails = await Newsletter.findAll();
	res.json(emails);
}

async function createNewsletter(req, res, next) {
	try {
		let email = await Newsletter.create(req.fields);
		res.status(201).json(email);
	} catch (error) {
		console.error(error);
		res.status(400).end();
	}
}

module.exports = {
	getAllNewsletters,
	createNewsletter
};
