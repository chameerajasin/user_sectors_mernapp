const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sectorSchema = new Schema({
  type: { type: String, required: true },
});

module.exports = mongoose.model("Sector", sectorSchema);
