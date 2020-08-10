var { getAllPosts, getSinglePost } = require("../controllers/blog-post.controller");
var { getAllComments, createComment } = require("../controllers/comment.controller");

module.exports = function(router) {
	router.get("/blog-posts", getAllPosts);
	router.get("/blog-posts/:id", getSinglePost);
	router.get("/blog-posts/:id/comments", getAllComments);
	router.post("/blog-posts/:id/comments", createComment);
};
