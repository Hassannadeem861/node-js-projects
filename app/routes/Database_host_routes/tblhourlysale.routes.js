module.exports = (app) => {
  const tblhourlysale = require("../../controllers/Database_host_controller/tblhourlysale.controller");
  // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
  var router = require("express").Router();
    // Create a new tblhourlysale
    router.post("/", tblhourlysale.create);
  
    // Retrieve all tblhourlysale
    router.get("/", tblhourlysale.findAll);
  
    // Retrieve all published tblhourlysale
    router.get("/published", tblhourlysale.findAllPublished);
  
    // Retrieve a single tblhourlysale with id
    router.get("/:id", tblhourlysale.findOne);
  
    // Update a tblhourlysale with id
    router.put("/:id", tblhourlysale.update);
  
    // Delete a tblhourlysale with id
    router.delete("/:id", tblhourlysale.delete);
  
    // Delete all tblhourlysale
    router.delete("/", tblhourlysale.deleteAll);
  
    app.use("/api/tblhourlysale", router);
  };
  