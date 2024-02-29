module.exports = (app) => {
  const tblinvprint = require("../../controllers/Database_host_controller/tblinvprint.controller");
  // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
  var router = require("express").Router();
  
    // Create a new tblinvprint
    router.post("/", tblinvprint.create);
  
    // Retrieve all tblinvprint
    router.get("/", tblinvprint.findAll);
  
    // Retrieve all published tblinvprint
    router.get("/published", tblinvprint.findAllPublished);
  
    // Retrieve a single tblinvprint with id
    router.get("/:id", tblinvprint.findOne);
  
    // Update a tblinvprint with id
    router.put("/:id", tblinvprint.update);
  
    // Delete a tblinvprint with id
    router.delete("/:id", tblinvprint.delete);
  
    // Delete all tblinvprint
    router.delete("/", tblinvprint.deleteAll);
  
    app.use("/api/tblinvprint", router);
  };
  