var { getAllMessages, createMessage } = require("../controllers/message.controller");

module.exports = function(router) {
	router.get("/messages", getAllMessages);
	router.post("/messages", createMessage);
};
