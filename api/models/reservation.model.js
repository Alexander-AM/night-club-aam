var { DataTypes, Model } = require("sequelize");
var { sequelize } = require("../config/database");

class Reservation extends Model {};

Reservation.init({
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
	table: {
		type: DataTypes.STRING,
		validate: {
			notEmpty: true
		}
	},
	guests: {
		type: DataTypes.STRING,
		validate: {
			notEmpty: true
		}
	},
	date: {
		type: DataTypes.DATE,
		validate: {
			isDate: true
		}
	},
	phone: {
		type: DataTypes.STRING,
		validate: {
			notEmpty: true
		}
	}
}, { sequelize, modelName: "reservation" });

sequelize.sync({ force:true })
	.then(function() {
		console.log("Tabel created: Reservation");
	})
	.catch(function(error) {
		console.error(error);
	});

module.exports = Reservation;
