var Asset = require("../models/asset.model");
var Event = require("../models/event.model");
var BlogPost = require("../models/blog-post.model");
var Gallery = require("../models/gallery.model");
var Testemonial = require("../models/testemonial.model");

var { readdir } = require("fs");
var { join } = require("path");

async function reset(req, res, next) {
	try {
		await Asset.destroy({
			where: {},
			truncate: true
		});

		readdir(join(__dirname, "..", "assets"), function(err, files) {
			if (err) {
				console.error(err);
				return;
			}
			files.forEach(async function(file) {
				await Asset.create({
					name: file,
					url: "http://localhost:4000/file-bucket/" + file
				});
			});
		});
	
		await Event.destroy({
			where: {},
			truncate: true
		});

		await Event.create({
			eventName: "Event Name",
			eventDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae elit a lacus auctor vehicula. Curabitur tempus risus in velit molestie efficitur. Sed sit amet pellentesque dolor, ac accumsan orci. Ut a varius lacus. Sed sed enim convallis, pulvinar magna vitae, condimentum est. Fusce mi erat, lacinia sit amet libero sed, varius luctus purus. Phasellus porta eleifend massa in hendrerit. Nunc fermentum massa quis urna pretium, et consectetur ante mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed nec mauris ut justo maximus euismod id in nibh. Nam id ultricies sapien. Proin blandit at tellus in tincidunt. Fusce efficitur dignissim odio eu porta.",
			eventDate: "2020-01-31T21:00:00.000Z",
			asset: 5,
			location: "Center Stage"
		});
		await Event.create({
			eventName: "Event Name",
			eventDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae elit a lacus auctor vehicula. Curabitur tempus risus in velit molestie efficitur. Sed sit amet pellentesque dolor, ac accumsan orci. Ut a varius lacus. Sed sed enim convallis, pulvinar magna vitae, condimentum est. Fusce mi erat, lacinia sit amet libero sed, varius luctus purus. Phasellus porta eleifend massa in hendrerit. Nunc fermentum massa quis urna pretium, et consectetur ante mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed nec mauris ut justo maximus euismod id in nibh. Nam id ultricies sapien. Proin blandit at tellus in tincidunt. Fusce efficitur dignissim odio eu porta.",
			eventDate: "2020-01-31T21:00:00.000Z",
			asset: 6,
			location: "Center Stage"
		});
		await Event.create({
			eventName: "Event Name",
			eventDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae elit a lacus auctor vehicula. Curabitur tempus risus in velit molestie efficitur. Sed sit amet pellentesque dolor, ac accumsan orci. Ut a varius lacus. Sed sed enim convallis, pulvinar magna vitae, condimentum est. Fusce mi erat, lacinia sit amet libero sed, varius luctus purus. Phasellus porta eleifend massa in hendrerit. Nunc fermentum massa quis urna pretium, et consectetur ante mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed nec mauris ut justo maximus euismod id in nibh. Nam id ultricies sapien. Proin blandit at tellus in tincidunt. Fusce efficitur dignissim odio eu porta.",
			eventDate: "2020-01-31T21:00:00.000Z",
			asset: 7,
			location: "Center Stage"
		});
		await Event.create({
			eventName: "Event Name",
			eventDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae elit a lacus auctor vehicula. Curabitur tempus risus in velit molestie efficitur. Sed sit amet pellentesque dolor, ac accumsan orci. Ut a varius lacus. Sed sed enim convallis, pulvinar magna vitae, condimentum est. Fusce mi erat, lacinia sit amet libero sed, varius luctus purus. Phasellus porta eleifend massa in hendrerit. Nunc fermentum massa quis urna pretium, et consectetur ante mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed nec mauris ut justo maximus euismod id in nibh. Nam id ultricies sapien. Proin blandit at tellus in tincidunt. Fusce efficitur dignissim odio eu porta.",
			eventDate: "2020-01-31T21:00:00.000Z",
			asset: 8,
			location: "Center Stage"
		});
		await Event.create({
			eventName: "Event Name",
			eventDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae elit a lacus auctor vehicula. Curabitur tempus risus in velit molestie efficitur. Sed sit amet pellentesque dolor, ac accumsan orci. Ut a varius lacus. Sed sed enim convallis, pulvinar magna vitae, condimentum est. Fusce mi erat, lacinia sit amet libero sed, varius luctus purus. Phasellus porta eleifend massa in hendrerit. Nunc fermentum massa quis urna pretium, et consectetur ante mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed nec mauris ut justo maximus euismod id in nibh. Nam id ultricies sapien. Proin blandit at tellus in tincidunt. Fusce efficitur dignissim odio eu porta.",
			eventDate: "2020-01-31T21:00:00.000Z",
			asset: 9,
			location: "Center Stage"
		});
		await Event.create({
			eventName: "Event Name",
			eventDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae elit a lacus auctor vehicula. Curabitur tempus risus in velit molestie efficitur. Sed sit amet pellentesque dolor, ac accumsan orci. Ut a varius lacus. Sed sed enim convallis, pulvinar magna vitae, condimentum est. Fusce mi erat, lacinia sit amet libero sed, varius luctus purus. Phasellus porta eleifend massa in hendrerit. Nunc fermentum massa quis urna pretium, et consectetur ante mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed nec mauris ut justo maximus euismod id in nibh. Nam id ultricies sapien. Proin blandit at tellus in tincidunt. Fusce efficitur dignissim odio eu porta.",
			eventDate: "2020-01-31T21:00:00.000Z",
			asset: 10,
			location: "Center Stage"
		});

		await BlogPost.destroy({
			where: {},
			truncate: true
		});

		await BlogPost.create({
			title: "Blog Post Title",
			author: "Admin",
			content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non rutrum felis. Pellentesque in blandit neque. Cras venenatis orci ut massa efficitur, eget pretium nulla blandit. Quisque sodales suscipit convallis. Ut feugiat iaculis est, a feugiat erat finibus in. Maecenas lacinia, massa nec tempus aliquam, nisi erat feugiat lectus, nec aliquam nisl massa a diam. Phasellus a aliquet risus, non gravida ipsum. Cras rutrum risus sed massa consequat hendrerit. In faucibus in tellus a vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec vel sagittis diam, eu pharetra quam. Nullam rutrum, leo vestibulum porta posuere, libero ante semper libero, id faucibus massa ante vel lacus. Cras ultricies erat ultrices eros elementum ultrices. Donec lobortis lectus in tristique tempus.
Sed dolor arcu, accumsan nec tortor vel, efficitur pretium turpis. Maecenas ac turpis vel diam euismod ornare. Nam et condimentum erat, nec pretium dui. In suscipit enim et tortor commodo tempor ut sed nibh. Maecenas venenatis sodales urna, at rutrum orci suscipit id. Aenean egestas ut libero id interdum. Nam ex erat, porttitor eget lacus et, dictum lacinia leo. Duis volutpat porttitor accumsan. Ut quis velit id dui posuere ullamcorper. Quisque ut placerat nisi. Donec sollicitudin malesuada convallis. Maecenas id aliquet sem. Vivamus et auctor risus, vel facilisis magna. Suspendisse dapibus auctor enim ut vehicula.
Suspendisse faucibus erat ac arcu gravida, vitae venenatis felis egestas. Fusce facilisis orci nunc, non tincidunt lacus suscipit vel. Nam ut sagittis nisi, nec ullamcorper lacus. Nam sed sodales diam. Mauris consectetur mauris vel ultricies egestas. In hac habitasse platea dictumst. Donec tincidunt velit id nibh efficitur ultrices. Curabitur posuere dapibus cursus. Morbi maximus, mi sed pharetra mollis, mauris orci lobortis ligula, ac malesuada odio nulla id dolor. Phasellus id ultrices urna, in laoreet libero. Nulla in dolor auctor, hendrerit felis id, fringilla nisi.
Sed eget massa a risus facilisis euismod. Aliquam sed sagittis dui, dictum rhoncus est. Vestibulum aliquet rutrum elementum. Curabitur auctor egestas vehicula. Nunc sagittis, erat ut sollicitudin lobortis, purus dui pretium dui, at euismod libero ipsum quis eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce elementum lectus et ultrices faucibus. Morbi ut neque in arcu pharetra laoreet. Vivamus malesuada neque massa, varius tincidunt mauris egestas ut. Praesent quis elementum leo. Suspendisse tristique condimentum auctor.
Aenean eleifend ligula eget velit posuere maximus. Cras posuere id eros vitae malesuada. Sed vitae arcu nunc. Duis ligula nulla, euismod ac leo et, vestibulum maximus enim. Ut vel neque pretium, dictum nulla ut, iaculis augue. Duis pharetra, risus sit amet gravida tincidunt, libero sem luctus quam, ullamcorper luctus nunc turpis blandit nibh. Proin et justo eget magna lobortis ultricies ut at urna. Aliquam scelerisque rutrum massa. In vel tellus in diam varius iaculis. Aliquam elementum ligula eget odio mattis vulputate. In egestas, ipsum vel sollicitudin iaculis, diam orci bibendum augue, at scelerisque purus neque eu neque.`,
			asset: 2
		});
		await BlogPost.create({
			title: "Blog Post Title",
			author: "Admin",
			content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non rutrum felis. Pellentesque in blandit neque. Cras venenatis orci ut massa efficitur, eget pretium nulla blandit. Quisque sodales suscipit convallis. Ut feugiat iaculis est, a feugiat erat finibus in. Maecenas lacinia, massa nec tempus aliquam, nisi erat feugiat lectus, nec aliquam nisl massa a diam. Phasellus a aliquet risus, non gravida ipsum. Cras rutrum risus sed massa consequat hendrerit. In faucibus in tellus a vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec vel sagittis diam, eu pharetra quam. Nullam rutrum, leo vestibulum porta posuere, libero ante semper libero, id faucibus massa ante vel lacus. Cras ultricies erat ultrices eros elementum ultrices. Donec lobortis lectus in tristique tempus.
Sed dolor arcu, accumsan nec tortor vel, efficitur pretium turpis. Maecenas ac turpis vel diam euismod ornare. Nam et condimentum erat, nec pretium dui. In suscipit enim et tortor commodo tempor ut sed nibh. Maecenas venenatis sodales urna, at rutrum orci suscipit id. Aenean egestas ut libero id interdum. Nam ex erat, porttitor eget lacus et, dictum lacinia leo. Duis volutpat porttitor accumsan. Ut quis velit id dui posuere ullamcorper. Quisque ut placerat nisi. Donec sollicitudin malesuada convallis. Maecenas id aliquet sem. Vivamus et auctor risus, vel facilisis magna. Suspendisse dapibus auctor enim ut vehicula.
Suspendisse faucibus erat ac arcu gravida, vitae venenatis felis egestas. Fusce facilisis orci nunc, non tincidunt lacus suscipit vel. Nam ut sagittis nisi, nec ullamcorper lacus. Nam sed sodales diam. Mauris consectetur mauris vel ultricies egestas. In hac habitasse platea dictumst. Donec tincidunt velit id nibh efficitur ultrices. Curabitur posuere dapibus cursus. Morbi maximus, mi sed pharetra mollis, mauris orci lobortis ligula, ac malesuada odio nulla id dolor. Phasellus id ultrices urna, in laoreet libero. Nulla in dolor auctor, hendrerit felis id, fringilla nisi.
Sed eget massa a risus facilisis euismod. Aliquam sed sagittis dui, dictum rhoncus est. Vestibulum aliquet rutrum elementum. Curabitur auctor egestas vehicula. Nunc sagittis, erat ut sollicitudin lobortis, purus dui pretium dui, at euismod libero ipsum quis eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce elementum lectus et ultrices faucibus. Morbi ut neque in arcu pharetra laoreet. Vivamus malesuada neque massa, varius tincidunt mauris egestas ut. Praesent quis elementum leo. Suspendisse tristique condimentum auctor.
Aenean eleifend ligula eget velit posuere maximus. Cras posuere id eros vitae malesuada. Sed vitae arcu nunc. Duis ligula nulla, euismod ac leo et, vestibulum maximus enim. Ut vel neque pretium, dictum nulla ut, iaculis augue. Duis pharetra, risus sit amet gravida tincidunt, libero sem luctus quam, ullamcorper luctus nunc turpis blandit nibh. Proin et justo eget magna lobortis ultricies ut at urna. Aliquam scelerisque rutrum massa. In vel tellus in diam varius iaculis. Aliquam elementum ligula eget odio mattis vulputate. In egestas, ipsum vel sollicitudin iaculis, diam orci bibendum augue, at scelerisque purus neque eu neque.`,
			asset: 3
		});
		await BlogPost.create({
			title: "Blog Post Title",
			author: "Admin",
			content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non rutrum felis. Pellentesque in blandit neque. Cras venenatis orci ut massa efficitur, eget pretium nulla blandit. Quisque sodales suscipit convallis. Ut feugiat iaculis est, a feugiat erat finibus in. Maecenas lacinia, massa nec tempus aliquam, nisi erat feugiat lectus, nec aliquam nisl massa a diam. Phasellus a aliquet risus, non gravida ipsum. Cras rutrum risus sed massa consequat hendrerit. In faucibus in tellus a vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec vel sagittis diam, eu pharetra quam. Nullam rutrum, leo vestibulum porta posuere, libero ante semper libero, id faucibus massa ante vel lacus. Cras ultricies erat ultrices eros elementum ultrices. Donec lobortis lectus in tristique tempus.
Sed dolor arcu, accumsan nec tortor vel, efficitur pretium turpis. Maecenas ac turpis vel diam euismod ornare. Nam et condimentum erat, nec pretium dui. In suscipit enim et tortor commodo tempor ut sed nibh. Maecenas venenatis sodales urna, at rutrum orci suscipit id. Aenean egestas ut libero id interdum. Nam ex erat, porttitor eget lacus et, dictum lacinia leo. Duis volutpat porttitor accumsan. Ut quis velit id dui posuere ullamcorper. Quisque ut placerat nisi. Donec sollicitudin malesuada convallis. Maecenas id aliquet sem. Vivamus et auctor risus, vel facilisis magna. Suspendisse dapibus auctor enim ut vehicula.
Suspendisse faucibus erat ac arcu gravida, vitae venenatis felis egestas. Fusce facilisis orci nunc, non tincidunt lacus suscipit vel. Nam ut sagittis nisi, nec ullamcorper lacus. Nam sed sodales diam. Mauris consectetur mauris vel ultricies egestas. In hac habitasse platea dictumst. Donec tincidunt velit id nibh efficitur ultrices. Curabitur posuere dapibus cursus. Morbi maximus, mi sed pharetra mollis, mauris orci lobortis ligula, ac malesuada odio nulla id dolor. Phasellus id ultrices urna, in laoreet libero. Nulla in dolor auctor, hendrerit felis id, fringilla nisi.
Sed eget massa a risus facilisis euismod. Aliquam sed sagittis dui, dictum rhoncus est. Vestibulum aliquet rutrum elementum. Curabitur auctor egestas vehicula. Nunc sagittis, erat ut sollicitudin lobortis, purus dui pretium dui, at euismod libero ipsum quis eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce elementum lectus et ultrices faucibus. Morbi ut neque in arcu pharetra laoreet. Vivamus malesuada neque massa, varius tincidunt mauris egestas ut. Praesent quis elementum leo. Suspendisse tristique condimentum auctor.
Aenean eleifend ligula eget velit posuere maximus. Cras posuere id eros vitae malesuada. Sed vitae arcu nunc. Duis ligula nulla, euismod ac leo et, vestibulum maximus enim. Ut vel neque pretium, dictum nulla ut, iaculis augue. Duis pharetra, risus sit amet gravida tincidunt, libero sem luctus quam, ullamcorper luctus nunc turpis blandit nibh. Proin et justo eget magna lobortis ultricies ut at urna. Aliquam scelerisque rutrum massa. In vel tellus in diam varius iaculis. Aliquam elementum ligula eget odio mattis vulputate. In egestas, ipsum vel sollicitudin iaculis, diam orci bibendum augue, at scelerisque purus neque eu neque.`,
			asset: 4
		});

		await Gallery.destroy({
			where: {},
			truncate: true
		});

		await Gallery.create({
			asset: 11
		});
		await Gallery.create({
			asset: 12
		});
		await Gallery.create({
			asset: 13
		});
		await Gallery.create({
			asset: 14
		});
		await Gallery.create({
			asset: 15
		});
		await Gallery.create({
			asset: 16
		});
		await Gallery.create({
			asset: 17
		});
		await Gallery.create({
			asset: 18
		});
		await Gallery.create({
			asset: 19
		});
		await Gallery.create({
			asset: 20
		});
		await Gallery.create({
			asset: 21
		});
		await Gallery.create({
			asset: 22
		});
		await Gallery.create({
			asset: 23
		});
		await Gallery.create({
			asset: 24
		});

		await Testemonial.destroy({
			where: {},
			truncate: true
		});

		await Testemonial.create({
			name: "John Doe",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non rutrum felis. Pellentesque in blandit neque. Cras venenatis orci ut massa efficitur, eget pretium nulla blandit. Quisque sodales suscipit convallis. Ut feugiat iaculis est, a feugiat erat finibus in. Maecenas lacinia, massa nec tempus aliquam, nisi erat feugiat lectus, nec aliquam nisl massa a diam.",
			asset: 25,
			facebook: "http://facebook.com",
			twitter: "http://twitter.com"
		});
		await Testemonial.create({
			name: "Mary Doe",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non rutrum felis. Pellentesque in blandit neque. Cras venenatis orci ut massa efficitur, eget pretium nulla blandit. Quisque sodales suscipit convallis. Ut feugiat iaculis est, a feugiat erat finibus in. Maecenas lacinia, massa nec tempus aliquam, nisi erat feugiat lectus, nec aliquam nisl massa a diam.",
			asset: 26,
			facebook: "http://facebook.com",
			twitter: "http://twitter.com"
		});
		await Testemonial.create({
			name: "Steven Doe",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non rutrum felis. Pellentesque in blandit neque. Cras venenatis orci ut massa efficitur, eget pretium nulla blandit. Quisque sodales suscipit convallis. Ut feugiat iaculis est, a feugiat erat finibus in. Maecenas lacinia, massa nec tempus aliquam, nisi erat feugiat lectus, nec aliquam nisl massa a diam.",
			asset: 27,
			facebook: "http://facebook.com",
			twitter: "http://twitter.com"
		});
	
		res.send("reset done");
	} catch (error) {
		console.error(error);
		res.status(500).end();
	}
}

module.exports = {
	reset
};
