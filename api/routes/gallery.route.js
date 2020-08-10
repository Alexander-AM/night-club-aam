var { getAllPhotos } = require("../controllers/gallery.controller");

module.exports = function(router) {
	router.get("/gallery-photos", getAllPhotos);
};
