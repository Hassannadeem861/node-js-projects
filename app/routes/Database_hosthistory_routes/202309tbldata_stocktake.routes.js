module.exports = app => {
  const tbldata_stocktake = require("../../controllers/Database_hosthistory_controller/202309tbldata_stocktake.controller");
  //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
    var router = require("express").Router();
  
    // Create a new Tbldata_stocktake
    router.post("/", tbldata_stocktake.create);
  
    // Retrieve all Tbldata_stocktakes
    router.get("/", tbldata_stocktake.findAll);
  
    // Retrieve a single Tbldata_stocktake with id
    router.get("/:id", tbldata_stocktake.findOne);
  
    // Update a Tbldata_stocktake with id
    router.put("/:id", tbldata_stocktake.update);
  
    // Delete a Tbldata_stocktake with id
    router.delete("/:id", tbldata_stocktake.delete);
  
    // Delete all Tbldata_stocktakes
    router.delete("/", tbldata_stocktake.deleteAll);
  
    app.use('/api/202309tbldata_stocktake', router);
  };
  