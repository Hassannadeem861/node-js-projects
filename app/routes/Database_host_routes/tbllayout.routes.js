module.exports = (app) => {

  const tbllayout = require("../../controllers/Database_host_controller/tbllayout.controller");
  // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
  var router = require("express").Router();
  
    // Create a new tbllayout
    router.post("/", tbllayout.create);
  
    // Retrieve all tbllayout
    router.get("/", tbllayout.findAll);
  
    // Retrieve all published tbllayout
    router.get("/published", tbllayout.findAllPublished);
  
    // Retrieve a single tbllayout with id
    router.get("/:id", tbllayout.findOne);
  
    // Update a tbllayout with id
    router.put("/:id", tbllayout.update);
  
    // Delete a tbllayout with id
    router.delete("/:id", tbllayout.delete);
  
    // Delete all tbllayout
    router.delete("/", tbllayout.deleteAll);
  
    app.use("/api/tbllayout", router);
  };
  