//require modules
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const mongoose = require("mongoose");

//create application
const app = express();

//configure app
let port = 3000;
let host = "localhost";
app.set("view engine", "ejs");

mongoose
	.connect(
		"mongodb+srv://kprindle:Kp48Masters_@instance1.kb8bs.mongodb.net/instance1?retryWrites=true&w=majority",
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then(() => {
		app.listen(port, host, () => {
			console.log("Server is running on port", port);
		});
	})
	.catch((err) => console.log(err.message));

app.use(express.static("public"));
//set up routes
app.get("/", (req, res) => {
	res.render("index");
});
app.get("/coverLetter", (req, res) => {
	res.render("coverLetter");
});
app.get("/resume", (req, res) => {
	res.render("resume");
});

app.get("/projects", (req, res) => {
	res.render("Projects");
});
// app.get('/contact', (req, res)=>{
//     res.render('Contact');
// })

//error handling
app.use((req, res, next) => {
	let err = new Error("The server cannot locate " + req.url);
	err.status = 404;
	next(err);
});
app.use((err, req, res, next) => {
	console.log(err.stack);
	if (!err.status) {
		err.status = 500;
		err.message = "Internal Server Error";
	}
	res.status(err.status);
	res.render("error", { error: err });
});
