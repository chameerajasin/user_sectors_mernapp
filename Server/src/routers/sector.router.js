const express = require("express");
const router = express.Router();

const { getSectorsHandler } = require("../controllers/sector.controller");

router.get("/", getSectorsHandler);

module.exports = router;
