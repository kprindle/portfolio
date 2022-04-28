const model = require("../models/application");


exports.index = (req, res, next) => {
	let admin = req.session.admin;
	model
		.find()
		.then((applications) => res.render("applications", { applications, admin }))
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
