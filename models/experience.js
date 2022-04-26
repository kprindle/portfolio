const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const experienceSchema = new Schema({
	company: { type: "string", required: true },
	jobTitle: { type: "string", required: true },
	startDate: { type: "date", required: true },
	endDate: { type: "date", required: true },
	jobDescription: { type: "string", required: true },
});

module.exports = mongoose.model("experience", experienceSchema);
