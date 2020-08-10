var { DataTypes, Model } = require("sequelize");
var { sequelize } = require("../config/database");
var sqlite = require("../config/sqlite");

class Gallery extends Model {};

Gallery.init({
	asset: {
		type: DataTypes.INTEGER
	}
}, { sequelize, modelName: "gallery" });

sequelize.sync(sqlite[process.env.NODE_ENV])
	.then(function() {
		console.log("Tabel created: Gallery");
	})
	.catch(function(error) {
		console.error(error);
	});

module.exports = Gallery;
