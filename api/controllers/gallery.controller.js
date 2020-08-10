var Gallery = require("../models/gallery.model");

async function getAllPhotos(req, res, next) {
	let photos = await Gallery.findAll();
	res.json(photos);
}

module.exports = {
	getAllPhotos
};
