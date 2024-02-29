  
  
module.exports = (app) => {
  const tbllisttable = require("../../controllers/Database_hosthistory_controller/tbllisttable.controller");
  //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
    var router = require("express").Router();
  
    // Create a new tbllisttable
    router.post("/", tbllisttable.create);
  
    // Retrieve all tbllisttable
    router.get("/", tbllisttable.findAll);
  
    // Retrieve all published tbllisttable
    router.get("/published", tbllisttable.findAllPublished);
  
    // Retrieve a single tbllisttable with id
    router.get("/:id", tbllisttable.findOne);
  
    // Update a tbllisttable with id
    router.put("/:id", tbllisttable.update);
  
    // Delete a tbllisttable with id
    router.delete("/:id", tbllisttable.delete);
  
    // Delete all tbllisttable
    router.delete("/", tbllisttable.deleteAll);
  
    app.use("/api/tbllisttable", router);
  };
  