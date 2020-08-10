var { DataTypes, Model } = require("sequelize");
var { sequelize } = require("../config/database");
var sqlite = require("../config/sqlite");

class Comment extends Model {};

Comment.init({
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
	comment: {
		type: DataTypes.TEXT,
		validate: {
			notEmpty: true
		}
	},
	blogpost_id: {
		type: DataTypes.INTEGER
	}
}, { sequelize, modelName: "comment" });

sequelize.sync(sqlite[process.env.NODE_ENV])
	.then(function() {
		console.log("Tabel created: Comment");
	})
	.catch(function(error) {
		console.error(error);
	});

module.exports = Comment;
