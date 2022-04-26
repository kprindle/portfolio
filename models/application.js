const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const applicationSchema = new Schema({
	name: { type: "string", required: true },
	description: { type: "string", required: true}
});

module.exports = mongoose.model("application", applicationSchema);
