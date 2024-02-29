module.exports = (app) => {
  const tblcontractmanager = require("../../controllers/Database_hostdebtors_controller/tblcontractmanager.controller");
  // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
  var router = require("express").Router();


  // Create a new Tutorial
  router.post("/", tblcontractmanager.create);

  // Retrieve all tblcontractmanager
  router.get("/", tblcontractmanager.findAll);

  // Retrieve all published tblcontractmanager
  router.get("/published", tblcontractmanager.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", tblcontractmanager.findOne);

  // Update a Tutorial with id
  router.put("/:id", tblcontractmanager.update);

  // Delete a Tutorial with id
  router.delete("/:id", tblcontractmanager.delete);

  // Delete all tblcontractmanager
  router.delete("/", tblcontractmanager.deleteAll);

  app.use("/api/tblcontractmanager", router);
};
