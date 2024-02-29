module.exports = (app) => {

    const tbldrawer = require("../../controllers/Database_host_controller/tbldrawer.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
    
    // Create a new tbldrawer
    router.post("/", tbldrawer.create);
    
    // Retrieve all tbldrawers
    router.get("/", tbldrawer.findAll);
    
    // Retrieve a single tbldrawer with id
    router.get("/:id", tbldrawer.findOne);
    
    // Update a tbldrawer with id
    router.put("/:id", tbldrawer.update);
    
    // Delete a tbldrawer with id
    router.delete("/:id", tbldrawer.delete);
    
    // Delete all tbldrawers
    router.delete("/", tbldrawer.deleteAll);
    
    app.use("/api/tbldrawer", router);
        
    };
    