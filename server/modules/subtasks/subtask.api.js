const router = require("express").Router();
const subtaskController = require("./subtask.controller");

// router.get("/", (req, res, next) => {
//   //   res.json({ data: "Hello", msg: "Success", status: 200 });
//   try {
//     res.json({ data: "Hello", msg: "Success" });
//   } catch (err) {
//     next(err);
//   }
// });

// create subtask
router.post("/", async (req, res, next) => {
  try {
    // const { payload } = req.body;

    const { todo, title } = req.body;

    if (!todo || !title) throw new Error("Title or Todo is required");

    const result = await subtaskController.create(req.body);

    res.json({ data: result, msg: "Success" });
  } catch (err) {
    next(err);
  }
});

//read one specific subtask
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await subtaskController.getById(id);

    res.json({ data: result, msg: "Success" });
  } catch (err) {
    next(err);
  }
});

//list all subtask
router.get("/", async (req, res, next) => {
  try {
    const result = await subtaskController.list();

    res.json({ data: result, msg: "Success" });
  } catch (err) {
    next(err);
  }
});

//update subtask
router.patch("/:id", async (req, res, next) => {
  try {
    // const { payload } = req.body;
    const { id } = req.params;
    const { status } = req.body;

    if (!status) throw new Error("Status is required");

    const result = await subtaskController.updateById(id, req.body);

    res.json({ data: result, msg: "Success" });
  } catch (err) {
    next(err);
  }
});

//delete subtask
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await subtaskController.remove(id);

    res.json({ data: result, msg: "Success" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
