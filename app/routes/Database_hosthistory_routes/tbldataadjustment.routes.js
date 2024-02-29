module.exports = (app) => {

    const tbldataadjustment = require("../../controllers/Database_hosthistory_controller/tbldataadjustment.controller");
  //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
    var router = require("express").Router();
    
    // Create a new tbldataadjustment
    router.post("/", tbldataadjustment.create);
    
    // Retrieve all tbldataadjustments
    router.get("/", tbldataadjustment.findAll);
    
    // Retrieve a single tbldataadjustment with id
    router.get("/:id", tbldataadjustment.findOne);
    
    // Update a tbldataadjustment with id
    router.put("/:id", tbldataadjustment.update);
    
    // Delete a tbldataadjustment with id
    router.delete("/:id", tbldataadjustment.delete);
    
    // Delete all tbldataadjustments
    router.delete("/", tbldataadjustment.deleteAll);
    
    app.use("/api/tbldataadjustment", router);
        
    };
    