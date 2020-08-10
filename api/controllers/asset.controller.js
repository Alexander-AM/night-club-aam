var Asset = require("../models/asset.model");

async function getSingleAsset(req, res, next) {
	try {
		let asset = await Asset.findByPk(parseInt(req.params.id));
		res.json(asset);
	} catch (error) {
		res.status(500).end();
	}
}

async function getAllAssets(req, res, next) {
	try {
		let assets = await Asset.findAll();
		res.json(assets);
	} catch (error) {
		res.status(500).end();
	}
}

module.exports = {
	getSingleAsset,
	getAllAssets
};
