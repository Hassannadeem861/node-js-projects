module.exports = (app) => {
  const tbldatagrv = require("../../controllers/Database_hosthistory_controller/tbldatagrv.controller");
  //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
    var router = require("express").Router();
  
    // Create a new tbldatagrv
    router.post("/", tbldatagrv.create);
  
    // Retrieve all tbldatagrv
    router.get("/", tbldatagrv.findAll);
  
    // Retrieve all published tbldatagrv
    router.get("/published", tbldatagrv.findAllPublished);
  
    // Retrieve a single tbldatagrv with id
    router.get("/:id", tbldatagrv.findOne);
  
    // Update a tbldatagrv with id
    router.put("/:id", tbldatagrv.update);
  
    // Delete a tbldatagrv with id
    router.delete("/:id", tbldatagrv.delete);
  
    // Delete all tbldatagrv
    router.delete("/", tbldatagrv.deleteAll);
  
    app.use("/api/tbldatagrv", router);
  };
  