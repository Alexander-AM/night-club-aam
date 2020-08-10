var Comment = require("../models/comment.model");

async function getAllComments(req, res, next) {
	let comments = await Comment.findAll({
		where: {
			blogpost_id: req.params.id
		}
	});
	res.json(comments);
}

async function createComment(req, res, next) {
	try {
		let comment = await Comment.create(req.fields);
		res.status(201).json(comment);
	} catch (error) {
		console.error(error);
		res.status(400).end();
	}
}

module.exports = {
	getAllComments,
	createComment
};
