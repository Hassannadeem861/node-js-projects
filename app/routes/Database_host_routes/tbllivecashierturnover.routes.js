module.exports = (app) => {
  const tbllivecashierturnover = require("../../controllers/Database_host_controller/tbllivecashierturnover.controller");
  // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
  var router = require("express").Router();
  
    // Create a new tbllivecashierturnover
    router.post("/", tbllivecashierturnover.create);
  
    // Retrieve all tbllivecashierturnover
    router.get("/", tbllivecashierturnover.findAll);
  
    // Retrieve all published tbllivecashierturnover
    router.get("/published", tbllivecashierturnover.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tbllivecashierturnover.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tbllivecashierturnover.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tbllivecashierturnover.delete);
  
    // Delete all tbllivecashierturnover
    router.delete("/", tbllivecashierturnover.deleteAll);
  
    app.use("/api/tbllivecashierturnover", router);
  };
  