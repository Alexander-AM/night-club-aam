var { DataTypes, Model } = require("sequelize");
var { sequelize } = require("../config/database");
var sqlite = require("../config/sqlite");

class Testemonial extends Model {};

Testemonial.init({
	name: {
		type: DataTypes.STRING,
		validate: {
			notEmpty: true
		}
	},
	content: {
		type: DataTypes.TEXT,
		validate: {
			notEmpty: true
		}
	},
	asset: DataTypes.INTEGER,
	facebook: DataTypes.STRING,
	twitter: DataTypes.STRING
}, { sequelize, modelName: "testemonial" });

sequelize.sync(sqlite[process.env.NODE_ENV])
	.then(function() {
		console.log("Tabel created: Testemonial");
	})
	.catch(function(error) {
		console.error(error);
	});

module.exports = Testemonial;
