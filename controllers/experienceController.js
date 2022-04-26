const model = require("../models/experience");

//shows all job experiences
exports.index = (req, res, next) => {
	model
		.find()
		.then((experiences) => res.render("experience", { experiences }))
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
		.then((experience) => res.redirect('/experience'))
        .catch((err) => {
			if (err.name === "ValidationError") {
				req.flash("error", err.message);
				return res.redirect("/back");
			}
			next(err);
		});
};

exports.edit = (req, res, next) => {

}

exports.delete = (req, res, next) => {

}
