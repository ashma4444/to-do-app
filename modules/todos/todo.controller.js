//CRUD operations will be performed inside controller

const Model = require("./todo.model");

// create todo
const create = async (payload) => {
  //   const result = await Model.create(payload);
  //   return result;

  // OR
  return await Model.create(payload);
};

//read one specific todo
const getById = async (id) => {
  return await Model.findOne({ _id: id });
};

//list all todo
const list = async () => {
  return await Model.find();
};

//update todo
const updateById = async (id, payload) => {
  return await Model.findOneAndUpdate({ _id: id }, payload, { new: true });
};

//delete todo
const remove = async (id) => {
  return await Model.deleteOne({ _id: id });
};

module.exports = { create, getById, list, updateById, remove };
