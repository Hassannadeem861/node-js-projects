module.exports = (app) => {

    const tbldatacashout = require("../../controllers/Database_hosthistory_controller/tbldatacashout.controller");
    //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
      var router = require("express").Router();
    
    // Create a new tbldatacashout
    router.post("/", tbldatacashout.create);
    
    // Retrieve all tbldatacashouts
    router.get("/", tbldatacashout.findAll);
    
    // Retrieve a single tbldatacashout with id
    router.get("/:id", tbldatacashout.findOne);
    
    // Update a tbldatacashout with id
    router.put("/:id", tbldatacashout.update);
    
    // Delete a tbldatacashout with id
    router.delete("/:id", tbldatacashout.delete);
    
    // Delete all tbldatacashouts
    router.delete("/", tbldatacashout.deleteAll);
    
    app.use("/api/tbldatacashout", router);
        
    };
    