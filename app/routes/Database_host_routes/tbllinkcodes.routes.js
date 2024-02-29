module.exports = (app) => {

  const tbllinkcodes = require("../../controllers/Database_host_controller/tbllinkcodes.controller");
  // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
  var router = require("express").Router();
    // Create a new tbllinkcodes
    router.post("/", tbllinkcodes.create);
  
    // Retrieve all tbllinkcodes
    router.get("/", tbllinkcodes.findAll);
  
    // Retrieve all published tbllinkcodes
    router.get("/published", tbllinkcodes.findAllPublished);
  
    // Retrieve a single tbllinkcodes with id
    router.get("/:id", tbllinkcodes.findOne);
  
    // Update a tbllinkcodes with id
    router.put("/:id", tbllinkcodes.update);
  
    // Delete a tbllinkcodes with id
    router.delete("/:id", tbllinkcodes.delete);
  
    // Delete all tbllinkcodes
    router.delete("/", tbllinkcodes.deleteAll);
  
    app.use("/api/tbllinkcodes", router);
  };
  