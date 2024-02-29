module.exports = (app) => {
  const tbldata_stocktake = require("../../controllers/Database_hosthistory_controller/202308tbldata_stocktake.controller");
  //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
    var router = require("express").Router();
  
    // Create a new tbldata_stocktake
    router.post("/", tbldata_stocktake.create);
  
    // Retrieve all tbldata_stocktake
    router.get("/", tbldata_stocktake.findAll);
  
    // Retrieve all published tbldata_stocktake
    router.get("/published", tbldata_stocktake.findAllPublished);
  
    // Retrieve a single tbldata_stocktake with id
    router.get("/:id", tbldata_stocktake.findOne);
  
    // Update a tbldata_stocktake with id
    router.put("/:id", tbldata_stocktake.update);
  
    // Delete a tbldata_stocktake with id
    router.delete("/:id", tbldata_stocktake.delete);
  
    // Delete all tbldata_stocktake
    router.delete("/", tbldata_stocktake.deleteAll);
  
    app.use("/api/202308tbldata_stocktake", router);
  };
  