module.exports = (app) => {

  const tbllistcombined = require("../../controllers/Database_host_controller/tbllistcombined.controller");
  // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
  var router = require("express").Router();
  
    // Create a new tbllistcombined
    router.post("/", tbllistcombined.create);
  
    // Retrieve all tbllistcombined
    router.get("/", tbllistcombined.findAll);
  
    // Retrieve all published tbllistcombined
    router.get("/published", tbllistcombined.findAllPublished);
  
    // Retrieve a single tbllistcombined with id
    router.get("/:id", tbllistcombined.findOne);
  
    // Update a tbllistcombined with id
    router.put("/:id", tbllistcombined.update);
  
    // Delete a tbllistcombined with id
    router.delete("/:id", tbllistcombined.delete);
  
    // Delete all tbllistcombined
    router.delete("/", tbllistcombined.deleteAll);
  
    app.use("/api/tbllistcombined", router);
  };
  