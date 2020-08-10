var { DataTypes, Model } = require("sequelize");
var { sequelize } = require("../config/database");
var sqlite = require("../config/sqlite");

class Newsletter extends Model {};

Newsletter.init({
	email: {
		type: DataTypes.STRING,
		validate: {
			isEmail: true
		}
	}
}, { sequelize, modelName: "newsletter" });

sequelize.sync(sqlite[process.env.NODE_ENV])
	.then(function() {
		console.log("Tabel created: Newsletter");
	})
	.catch(function(error) {
		console.error(error);
	});

module.exports = Newsletter;
