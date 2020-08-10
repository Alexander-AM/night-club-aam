var { DataTypes, Model } = require("sequelize");
var { sequelize } = require("../config/database");
var sqlite = require("../config/sqlite");

class BlogPost extends Model {};

BlogPost.init({
	title: {
		type: DataTypes.STRING,
		validate: {
			notEmpty: true
		}
	},
	author: {
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
	asset: DataTypes.INTEGER
}, { sequelize, modelName: "blogpost" });

sequelize.sync(sqlite[process.env.NODE_ENV])
	.then(function() {
		console.log("Tabel created: BlogPost");
	})
	.catch(function(error) {
		console.error(error);
	});

module.exports = BlogPost;
