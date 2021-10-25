const express = require("express");
const router = express();
const itemControllers=require('../controllers/items')
router.get("/", itemControllers.GET_Items);
router.get("/add", itemControllers.GET_Add);
router.post("/add", itemControllers.POST_Add);
router.get("/:id", itemControllers.GET_ById);
router.put("/:id", itemControllers.PUT_ById);
router.delete("/:id", itemControllers.DELETE_ById);

module.exports = router;
