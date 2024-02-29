module.exports = (app) => {
  const tblinvprintsurcharge = require("../../controllers/Database_host_controller/tblinvprintsurcharge.controller");
  // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
  var router = require("express").Router();
  
    // Create a new tblinvprintsurcharge
    router.post("/", tblinvprintsurcharge.create);
  
    // Retrieve all tblinvprintsurcharge
    router.get("/", tblinvprintsurcharge.findAll);
  
    // Retrieve all published tblinvprintsurcharge
    router.get("/published", tblinvprintsurcharge.findAllPublished);
  
    // Retrieve a single tblinvprintsurcharge with id
    router.get("/:id", tblinvprintsurcharge.findOne);
  
    // Update a tblinvprint with id
    router.put("/:id", tblinvprintsurcharge.update);
  
    // Delete a tblinvprintsurcharge with id
    router.delete("/:id", tblinvprintsurcharge.delete);
  
    // Delete all tblinvprintsurcharge
    router.delete("/", tblinvprintsurcharge.deleteAll);
  
    app.use("/api/tblinvprintsurcharge", router);
  };
  