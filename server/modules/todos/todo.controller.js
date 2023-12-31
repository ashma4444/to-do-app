//CRUD operations will be performed inside controller

const Model = require("./todo.model");
const subtaskModel = require("../subtasks/subtask.model");

// create todo
const create = async (payload) => {
  //   const result = await Model.create(payload);
  //   return result;

  // OR
  const { title } = payload;
  return await Model.create({ title });
};

//read one specific todo
const getById = async (id) => {
  return await Model.findOne({ _id: id });
};

//list all todo
const list = async () => {
  // return await Model.find();
  return await Model.aggregate([
    {
      $lookup: {
        from: "subtasks",
        localField: "_id",
        foreignField: "todo",
        as: "subtasks",
      },
    },
  ]);
};

//update todo
const updateById = async (id, payload) => {
  const { status } = payload;
  // status = status ? "completed" : "pending";

  if (status === "completed") {
    const result = await subtaskModel.find({ todo: id });
    result.map(async (subtask) => {
      await subtaskModel.findOneAndUpdate(
        { _id: subtask?._id },
        { status: "completed" },
        {
          new: true,
        }
      );
    });
  }
  return await Model.findOneAndUpdate({ _id: id }, payload, { new: true });
};

//delete todo
const remove = async (id) => {
  return await Model.deleteOne({ _id: id });
};

module.exports = { create, getById, list, updateById, remove };
