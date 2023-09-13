require("dotenv").config();
const cors = require("cors");
const express = require("express");
const indexRouter = require("./routes");
const mongoose = require("mongoose");

const app = express();

//connect db
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("DATABASE CONNECTED"));

// enable cors
app.use(cors());

// to catch request from body - enable json body --> req.body lina milcha
app.use(express.json());

// create routes
app.use("/", indexRouter);

// middleware
app.use((err, req, res, next) => {
  err = err ? err.toString() : "Something went wrong";
  if (err) {
    res.status(500).json({ data: "", msg: err });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
