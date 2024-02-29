module.exports = (app) => {
    // const tutorials = require("../controllers/tutorial.controller.js");
    const tbldata_adjustment = require("../../controllers/Database_hosthistory_controller/202308tbldata_adjustment.controller");
    //const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
    var router = require("express").Router();
  
    // Create a new tbldata_adjustment
    router.post("/", tbldata_adjustment.create);
  
    // Retrieve all tbldata_adjustment
    router.get("/", tbldata_adjustment.findAll);
  
    // Retrieve all published tbldata_adjustment
    router.get("/published", tbldata_adjustment.findAllPublished);
  
    // Retrieve a single tbldata_adjustment with id
    router.get("/:id", tbldata_adjustment.findOne);
  
    // Update a tbldata_adjustment with id
    router.put("/:id", tbldata_adjustment.update);
  
    // Delete a tbldata_adjustment with id
    router.delete("/:id", tbldata_adjustment.delete);
  
    // Delete all tbldata_adjustment
    router.delete("/", tbldata_adjustment.deleteAll);
  
    app.use("/api/202308tbldata_adjustment", router);
  };
  