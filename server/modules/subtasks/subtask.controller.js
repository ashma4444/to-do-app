//CRUD operations will be performed inside controller

const Model = require("./subtask.model");

// create subtask
const create = async (payload) => {
  //   const result = await Model.create(payload);
  //   return result;

  // OR
  return await Model.create(payload);
};

//read one specific subtask
const getById = async (id) => {
  return await Model.findOne({ _id: id });
};

//list all subtask
const list = async () => {
  return await Model.find();
};

//update subtask
const updateById = async (id, payload) => {
  // const { status } = payload;
  // status = status ? "completed" : "pending";
  return await Model.findOneAndUpdate({ _id: id }, payload, { new: true });
};

//delete subtask
const remove = async (id) => {
  return await Model.deleteOne({ _id: id });
};

module.exports = { create, getById, list, updateById, remove };
