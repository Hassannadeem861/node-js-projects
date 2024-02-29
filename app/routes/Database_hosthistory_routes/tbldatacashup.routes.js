module.exports = (app) => {

    const tbldatacashup = require("../../controllers/Database_hosthistory_controller/tbldatacashup.controller");
  //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
    var router = require("express").Router();
    
    // Create a new tbldatacashup
    router.post("/", tbldatacashup.create);
    
    // Retrieve all tbldatacashups
    router.get("/", tbldatacashup.findAll);
    
    // Retrieve a single tbldatacashup with id
    router.get("/:id", tbldatacashup.findOne);
    
    // Update a tbldatacashup with id
    router.put("/:id", tbldatacashup.update);
    
    // Delete a tbldatacashup with id
    router.delete("/:id", tbldatacashup.delete);
    
    // Delete all tbldatacashups
    router.delete("/", tbldatacashup.deleteAll);
    
    app.use("/api/tbldatacashup", router);
        
    };
    