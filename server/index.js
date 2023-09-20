require("dotenv").config();
const cors = require("cors");
const express = require("express");
const indexRouter = require("./routes");
const mongoose = require("mongoose");
const Replicate = require("replicate");

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

// test

// const replicate = new Replicate({
//   // get your token from https://replicate.com/account
//   auth: process.env.REPLICATE_API_TOKEN,
// });

// const runFunc = async () => {
//   const output = await replicate.run(
//     "stability-ai/stable-diffusion:27b93a2413e7f36cd83da926f3656280b2931564ff050bf9575f1fdf9bcd7478",
//     {
//       input: {
//         prompt: "painting of a cat by andy warhol",
//       },
//     }
//   );
//   console.log(output);
// };

// runFunc();

// const generateImage = async () => {
//   const output = await replicate.run(
//     "stability-ai/stable-diffusion:27b93a2413e7f36cd83da926f3656280b2931564ff050bf9575f1fdf9bcd7478",
//     {
//       input: {
//         prompt: "painting of a cat by andy warhol",
//       },
//     }
//   );
//   return output;
// };

// const generateMultipleImages = async (count) => {
//   const imagePromises = [];
//   for (let i = 0; i < count; i++) {
//     imagePromises.push(generateImage());
//   }

//   const images = await Promise.all(imagePromises);
//   console.log(images);
// };

// // Adjust the number of images you want to generate
// const numberOfImages = 5;
// generateMultipleImages(numberOfImages);
