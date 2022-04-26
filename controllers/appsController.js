const model = require("../models/application");

//shows all job applications
exports.index = (req, res, next) => {
	model
		.find()
		.then((applications) => res.render("application", { applications }))
		.catch((err) => next(err));
};

//navigate to new form to add an application
exports.new = (req, res) => {
	res.render("./application/new");
};

exports.create = (req, res, next) => {
	let application = new model(req.body);
	application
		.save()
		.then((application) => res.redirect("/application"))
		.catch((err) => {
			if (err.name === "ValidationError") {
				req.flash("error", err.message);
				return res.redirect("/back");
			}
			next(err);
		});
};

exports.edit = (req, res, next) => {};

exports.delete = (req, res, next) => {};
