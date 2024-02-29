module.exports = (app) => {

    const tbldatacashup_det = require("../../controllers/Database_hosthistory_controller/tbldatacashup_det.controller");
    //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
      var router = require("express").Router();
    
    // Create a new tbldatacashup_det
    router.post("/", tbldatacashup_det.create);
    
    // Retrieve all tbldatacashup_dets
    router.get("/", tbldatacashup_det.findAll);
    
    // Retrieve a single tbldatacashup_det with id
    router.get("/:id", tbldatacashup_det.findOne);
    
    // Update a tbldatacashup_det with id
    router.put("/:id", tbldatacashup_det.update);
    
    // Delete a tbldatacashup_det with id
    router.delete("/:id", tbldatacashup_det.delete);
    
    // Delete all tbldatacashup_dets
    router.delete("/", tbldatacashup_det.deleteAll);
    
    app.use("/api/tbldatacashup_det", router);
        
    };
    