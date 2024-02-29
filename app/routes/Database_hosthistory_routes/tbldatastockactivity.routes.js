  
  
module.exports = (app) => {
  const tbldatastockactivity = require("../../controllers/Database_hosthistory_controller/tbldatastockactivity.controller");
  //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
    var router = require("express").Router();
  
    // Create a new tbldatastockactivity
    router.post("/", tbldatastockactivity.create);
  
    // Retrieve all tbldatastockactivity
    router.get("/", tbldatastockactivity.findAll);
  
    // Retrieve all published tbldatastockactivity
    router.get("/published", tbldatastockactivity.findAllPublished);
  
    // Retrieve a single tbldatastockactivity with id
    router.get("/:id", tbldatastockactivity.findOne);
  
    // Update a tbldatastockactivity with id
    router.put("/:id", tbldatastockactivity.update);
  
    // Delete a tbldatastockactivity with id
    router.delete("/:id", tbldatastockactivity.delete);
  
    // Delete all tbldatastockactivity
    router.delete("/", tbldatastockactivity.deleteAll);
  
    app.use("/api/tbldatastockactivity", router);
  };
  