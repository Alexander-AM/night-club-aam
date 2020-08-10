var { getSingleAsset, getAllAssets } = require("../controllers/asset.controller");

module.exports = function(router) {
	router.get("/assets/:id", getSingleAsset);
	router.get("/assets", getAllAssets);
};
