module.exports = (app) => {
    // routes/202310tbldata_cashup_det.routes.js
    const tbldatacashup_det = require("../../controllers/Database_hosthistory_controller/202312tbldata_cashup_det.controller");
    //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
      var router = require("express").Router();
    // Create a new tbldata_cashup_det
    router.post("/", tbldatacashup_det.create);
    
    // Retrieve all tbldata_cashup_det
    router.get("/", tbldatacashup_det.findAll);
    
    // Retrieve a single tbldata_cashup_det with id
    router.get("/:id", tbldatacashup_det.findOne);
    
    // Update a tbldata_cashup_det with id
    router.put("/:id", tbldatacashup_det.update);
    
    // Delete a tbldata_cashup_det with id
    router.delete("/:id", tbldatacashup_det.delete);
    
    // Delete all tbldata_cashup_det
    router.delete("/", tbldatacashup_det.deleteAll);
    
    app.use("/api/202312tbldata_cashup_det", router);
    
    
    };