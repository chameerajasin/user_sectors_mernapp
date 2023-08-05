const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  sector: { type: String, required: true },
  isAgreedToTerms: { type: Boolean, required: true },
});

module.exports = mongoose.model("User", userSchema);
