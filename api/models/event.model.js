var { DataTypes, Model } = require("sequelize");
var { sequelize } = require("../config/database");

class Event extends Model {};

Event.init({
	eventName: DataTypes.TEXT,
	eventDescription: DataTypes.TEXT,
	eventDate: DataTypes.DATE,
	asset: DataTypes.INTEGER,
	location: DataTypes.STRING
}, { sequelize, modelName: "event" });

sequelize.sync({ force:true })
	.then(function() {
		console.log("Tabel created: Event");
	})
	.catch(function(error) {
		console.error(error);
	});

module.exports = Event;
