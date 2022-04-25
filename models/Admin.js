const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
	userName: { type: "string", required: [true, "username is required"] },
	password: { type: String, required: [true, "password is required"] },
});

module.exports = mongoose.model("admin", adminSchema);
