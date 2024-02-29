module.exports = (app) => {

    const tbldatabase = require("../../controllers/Database_host_controller/tbldatabase.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
    
    // Create a new tbldatabase
    router.post("/", tbldatabase.create);
    
    // Retrieve all tbldatabases
    router.get("/", tbldatabase.findAll);
    
    // Retrieve a single tbldatabase with id
    router.get("/:id", tbldatabase.findOne);
    
    // Update a tbldatabase with id
    router.put("/:id", tbldatabase.update);
    
    // Delete a tbldatabase with id
    router.delete("/:id", tbldatabase.delete);
    
    // Delete all tbldatabases
    router.delete("/", tbldatabase.deleteAll);
    
    app.use("/api/tbldatabase", router);
        
    };
    