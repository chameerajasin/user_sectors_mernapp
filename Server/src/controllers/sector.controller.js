const { getSectors } = require("../services/sector.service");

exports.getSectorsHandler = async (_, res) => {
  try {
    const sectors = await getSectors();

    res.status(200).json({ data: sectors });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
