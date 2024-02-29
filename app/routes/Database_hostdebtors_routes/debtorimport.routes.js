module.exports = (app) => {
  // const debtorimport = require("../controllers/tutorial.controller.js");
  const debtorimport = require("../../controllers/Database_hostdebtors_controller/debtorimport.controller");
  // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
  var router = require("express").Router();


  // Create a new Tutorial
  router.post("/", debtorimport.create);

  // Retrieve all debtorimport
  router.get("/", debtorimport.findAll);

  // Retrieve all published debtorimport
  router.get("/published", debtorimport.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:DebtorCode", debtorimport.findOne);

  // Update a Tutorial with id
  router.put("/:DebtorCode", debtorimport.update);

  // Delete a Tutorial with id
  router.delete("/:DebtorCode", debtorimport.delete);

  // Delete all debtorimport
  router.delete("/", debtorimport.deleteAll);

  app.use("/api/debtorimport", router);
};
