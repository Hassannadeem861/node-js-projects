module.exports = (app) => {
    // const tutorials = require("../controllers/tutorial.controller.js");
    const tbldatapayout = require("../../controllers/Database_hosthistory_controller/tbldatapayout.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
  
    // Create a new tbldatapayout
    router.post("/", tbldatapayout.create);
  
    // Retrieve all tbldatapayout
    router.get("/", tbldatapayout.findAll);
  
    // Retrieve all published tbldatapayout
    router.get("/published", tbldatapayout.findAllPublished);
  
    // Retrieve a single tbldatapayout with id
    router.get("/:id", tbldatapayout.findOne);
  
    // Update a tbldatapayout with id
    router.put("/:id", tbldatapayout.update);
  
    // Delete a tbldatapayout with id
    router.delete("/:id", tbldatapayout.delete);
  
    // Delete all tbldatapayout
    router.delete("/", tbldatapayout.deleteAll);
  
    app.use("/api/tbldatapayout", router);
  };
  