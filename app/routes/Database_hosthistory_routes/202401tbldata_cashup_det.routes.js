module.exports = (app) => {
    const tbldata_cashupdet = require("../../controllers/Database_hosthistory_controller/202401tbldata_cashup_det.controller");
    //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
      var router = require("express").Router();
    
    // Create a new tbldata_cashup_det
    router.post("/", tbldata_cashupdet.create);
    
    // Retrieve all tbldata_cashup_det
    router.get("/", tbldata_cashupdet.findAll);
    
    // Retrieve a single tbldata_cashup_det with id
    router.get("/:id", tbldata_cashupdet.findOne);
    
    // Update a tbldata_cashup_det with id
    router.put("/:id", tbldata_cashupdet.update);
    
    // Delete a tbldata_cashup_det with id
    router.delete("/:id", tbldata_cashupdet.delete);
    
    // Delete all tbldata_cashup_det
    router.delete("/", tbldata_cashupdet.deleteAll);
    
    app.use("/api/202401tbldata_cashup_det", router);
    
    
    };