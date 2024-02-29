module.exports = (app) => {
  const tblsettings = require("../../controllers/Database_host_controller/tblsettings.controller");
  // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
  var router = require("express").Router();
  
    // Create a new tblsettings
    router.post("/", tblsettings.create);
  
    // Retrieve all tblsettings
    router.get("/", tblsettings.findAll);
  
    // Retrieve all published tblsettings
    router.get("/published", tblsettings.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tblsettings.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tblsettings.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tblsettings.delete);
  
    // Delete all tblsettings
    router.delete("/", tblsettings.deleteAll);
  
    app.use("/api/tblsettings", router);
  };
  