module.exports = (app) => {
  const tbllivecashier = require("../../controllers/Database_host_controller/tbllivecashier.controller");
  // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
  var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", tbllivecashier.create);
  
    // Retrieve all tbllivecashier
    router.get("/", tbllivecashier.findAll);
  
    // Retrieve all published tbllivecashier
    router.get("/published", tbllivecashier.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tbllivecashier.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tbllivecashier.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tbllivecashier.delete);
  
    // Delete all tbllivecashier
    router.delete("/", tbllivecashier.deleteAll);
  
    app.use("/api/tbllivecashier", router);
  };
  