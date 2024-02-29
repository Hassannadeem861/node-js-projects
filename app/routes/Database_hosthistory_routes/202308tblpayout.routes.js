module.exports = (app) => {
  const tblpayout = require("../../controllers/Database_hosthistory_controller/tbldatapayout.controller");
  //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
    var router = require("express").Router();

  
    // Create a new tblpayout
    router.post("/", tblpayout.create);
  
    // Retrieve all tblpayout
    router.get("/", tblpayout.findAll);
  
    // Retrieve all published tblpayout
    router.get("/published", tblpayout.findAllPublished);
  
    // Retrieve a single tblpayout with id
    router.get("/:id", tblpayout.findOne);
  
    // Update a tblpayout with id
    router.put("/:id", tblpayout.update);
  
    // Delete a tblpayout with id
    router.delete("/:id", tblpayout.delete);
  
    // Delete all tblpayout
    router.delete("/", tblpayout.deleteAll);
  
    app.use("/api/202308tblpayout", router);
  };
  