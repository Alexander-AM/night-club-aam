var BlogPost = require("../models/blog-post.model");

async function getSinglePost(req, res, next) {
	let post = await BlogPost.findByPk(req.params.id);
	res.json(post);
}

async function getAllPosts(req, res, next) {
	let posts = await BlogPost.findAll();
	res.json(posts);
}

module.exports = {
	getAllPosts,
	getSinglePost
};
