// const mongoose = require("mongoose");

// const SubtaskSchema = new mongoose.Schema({});

//OR

const { Schema, model } = require("mongoose");
const { ObjectId } = require("mongoose").Schema;
const commonSchema = require("../../utils/commonSchema");

const SubtaskSchema = new Schema({
  title: { type: String, required: true },
  status: { type: String, enum: ["pending", "completed"], default: "pending" },
  todo: { type: ObjectId, ref: "Todo" }, // foreign key - ref = "Todo" --> schema
  ...commonSchema, //destructure
});

// const Subtask = new Model("Subtask", SubtaskSchema);

// module.exports = Subtask;

// OR
module.exports = model("Subtask", SubtaskSchema);
