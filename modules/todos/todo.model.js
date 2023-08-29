// const mongoose = require("mongoose");

// const TodoSchema = new mongoose.Schema({});

//OR

const { Schema, model } = require("mongoose");
const commonSchema = require("../../utils/commonSchema");

const TodoSchema = new Schema({
  title: { type: String, required: true },
  status: { type: String, enum: ["pending", "completed"], default: "pending" },
  ...commonSchema, //destructure
});

// const Todo = new Model("Todo", TodoSchema);

// module.exports = Todo;

// OR
module.exports = new model("Todo", TodoSchema);
