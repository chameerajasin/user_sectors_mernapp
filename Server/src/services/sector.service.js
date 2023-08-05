const Sector = require("../models/sector.model");

exports.getSectors = async () => {
  try {
    return await Sector.find();
  } catch (error) {
    throw new Error(error);
  }
};
