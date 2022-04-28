const model = require("../models/admin");

exports.index = (req, res, next) => {
	res.render("/login");
};

exports.login = (req, res, next) => {
	let username = req.body.username;
	if (username) {
		username = username.toLowerCase();
	}
	let password = req.body.password;
	model
		.findOne({ username: username })
		.then((admin) => {
			if (!admin) {
				req.flash("error", "wrong username");
				res.redirect("/login");
			} else {
				if (admin.password === password) {
					req.session.admin = admin._id;
					req.flash("success", "You have successfully logged in");
					res.redirect("/");
				} else {
					req.flash("error", "wrong password");
					res.redirect("/login");
				}
			}
		})
		.catch((err) => next(err));
};
