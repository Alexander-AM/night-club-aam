var { DataTypes, Model } = require("sequelize");
var { sequelize } = require("../config/database");
var sqlite = require("../config/sqlite");

class Message extends Model {};

Message.init({
	name: {
		type: DataTypes.STRING,
		validate: {
			notEmpty: true
		}
	},
	email: {
		type: DataTypes.STRING,
		validate: {
			isEmail: true
		}
	},
	website: {
		type: DataTypes.STRING,
		validate: {
			isUrl: true
		}
	},
	message: {
		type: DataTypes.TEXT
	}
}, { sequelize, modelName: "message" });

sequelize.sync(sqlite[process.env.NODE_ENV])
	.then(function() {
		console.log("Tabel created: Message");
	})
	.catch(function(error) {
		console.error(error);
	});

module.exports = Message;
