const router = require("express").Router();
const todoController = require("./todo.controller");

// router.get("/", (req, res, next) => {
//   //   res.json({ data: "Hello", msg: "Success", status: 200 });
//   try {
//     res.json({ data: "Hello", msg: "Success" });
//   } catch (err) {
//     next(err);
//   }
// });

// create todo
router.post("/", async (req, res, next) => {
  try {
    /*const { payload } = req.body;  
    if entire object pathako chavani, but we are sending only title in body, so we can directly do req.body*/

    const result = await todoController.create(req.body);

    res.json({ data: result, msg: "Success" });
  } catch (err) {
    next(err);
  }
});

//read one specific todo
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await todoController.getById(id);

    res.json({ data: result, msg: "Success" });
  } catch (err) {
    next(err);
  }
});

//list all todo
router.get("/", async (req, res, next) => {
  try {
    const result = await todoController.list();

    res.json({ data: result, msg: "Success" });
  } catch (err) {
    next(err);
  }
});

//update todo
router.patch("/:id", async (req, res, next) => {
  try {
    // const { payload } = req.body;
    const { id } = req.params;
    // const { status } = req.body;

    const result = await todoController.updateById(id, req.body);

    res.json({ data: result, msg: "Success" });
  } catch (err) {
    next(err);
  }
});

//delete todo
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await todoController.remove(id);

    res.json({ data: result, msg: "Success" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
