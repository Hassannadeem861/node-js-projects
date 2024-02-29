module.exports = (app) => {

    const tblgroups = require("../../controllers/Database_host_controller/tblgroups.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
    
    // Create a new tblgroups
    router.post("/", tblgroups.create);
    
    // Retrieve all tblgroups
    router.get("/", tblgroups.findAll);
    
    // Retrieve a single tblgroups with id
    router.get("/:id", tblgroups.findOne);
    
    // Update a tblgroups with id
    router.put("/:id", tblgroups.update);
    
    // Delete a tblgroups with id
    router.delete("/:id", tblgroups.delete);
    
    // Delete all tblgroups
    router.delete("/", tblgroups.deleteAll);
    
    app.use("/api/tblgroups", router);
        
    };
    