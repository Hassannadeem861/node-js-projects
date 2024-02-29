module.exports = (app) => {
  const tbllistsurcharge = require("../../controllers/Database_host_controller/tbllistsurcharge.controller");
  // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
  var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", tbllistsurcharge.create);
  
    // Retrieve all tbllistsurcharge
    router.get("/", tbllistsurcharge.findAll);
  
    // Retrieve all published tbllistsurcharge
    router.get("/published", tbllistsurcharge.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tbllistsurcharge.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tbllistsurcharge.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tbllistsurcharge.delete);
  
    // Delete all tbllistsurcharge
    router.delete("/", tbllistsurcharge.deleteAll);
  
    app.use("/api/tbllistsurcharge", router);
  };
  