var Message = require("../models/message.model");

async function getAllMessages(req, res, next) {
	let messages = await Message.findAll();
	res.json(messages);
}

async function createMessage(req, res, next) {
	try {
		console.log(req.fields)
		let message = await Message.create(req.fields);
		res.status(201).json(message);
	} catch (error) {
		console.error(error);
		res.status(400).end();
	}
}

module.exports = {
	getAllMessages,
	createMessage
};
