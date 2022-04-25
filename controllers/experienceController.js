const model = require("../models/experience");

//shows all job experiences
exports.index = (req, res, next) => {
	model
		.find()
		.then((experience) => res.render("./experience/experience", { experience }))
		.catch((err) => next(err));
};

//navigate to new form to add an experience
exports.new = (req, res) => {
	res.render("./experience/new");
};

exports.create = (req, res, next) => {
	let experience = new model(req.body);
	experience
		.save()
		.then((experience) => res.render("./experience/experience", { experience }))
        .catch((err) => {
			if (err.name === "ValidationError") {
				req.flash("error", err.message);
				return res.redirect("/back");
			}
			next(err);
		});
};


