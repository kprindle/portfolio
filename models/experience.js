const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const experienceSchema = new Schema({
	company: { type: "string", required: true },
	jobTitle: { type: "string", required: true },
	startDate: { type: "string", required: true },
	endDate: { type: "string", required: true },
	jobDescription: { type: "string", required: true },
});

module.exports = mongoose.model("experience", experienceSchema);
