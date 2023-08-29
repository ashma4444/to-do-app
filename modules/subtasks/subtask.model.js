// const mongoose = require("mongoose");

// const SubtaskSchema = new mongoose.Schema({});

//OR

const { Schema, model } = require("mongoose");
const commonSchema = require("../../utils/commonSchema");

const SubtaskSchema = new Schema({
  title: String,
  status: { type: String, enum: ["pending", "completed"], default: "pending" },
  //   todo: { type: isObjectIdOrHexString, ref: "Todo" }, // foreign key
  ...commonSchema, //destructure
});

// const Subtask = new Model("Subtask", SubtaskSchema);

// module.exports = Subtask;

// OR
module.exports = new model("Subtask", SubtaskSchema);
