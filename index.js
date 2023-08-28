require("dotenv").config();

const express = require("express");
const indexRouter = require("./routes");

const app = express();

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
