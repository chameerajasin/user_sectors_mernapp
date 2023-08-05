const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongodb conneted");
  })
  .catch((err) => {
    console.log("error connecting database", err);
  });

app.use(cors());
app.use(express.json());

//Import routes
const sectorRoute = require("./routers/sector.router");
const userRoute = require("./routers/user.router");

app.use("/api/sector", sectorRoute);
app.use("/api/user", userRoute);

app.listen(4000, () => {
  console.log("server is running");
});
