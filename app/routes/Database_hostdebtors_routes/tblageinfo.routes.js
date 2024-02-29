module.exports = (app) => {
  // const tblAgeInfo = require("../controllers/tutorial.controller.js");
  const tblAgeInfo = require("../../controllers/Database_hostdebtors_controller/tblageinfo.controller.js");
  // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", tblAgeInfo.create);

  // Retrieve all tblAgeInfo
  router.get("/", tblAgeInfo.findAll);

  // Retrieve all published tblAgeInfo
  router.get("/published", tblAgeInfo.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", tblAgeInfo.findOne);

  // Update a Tutorial with id
  router.put("/:id", tblAgeInfo.update);

  // Delete a Tutorial with id
  router.delete("/:id", tblAgeInfo.delete);

  // Delete all tblAgeInfo
  router.delete("/", tblAgeInfo.deleteAll);

  app.use("/api/tblAgeInfo", router);
};
