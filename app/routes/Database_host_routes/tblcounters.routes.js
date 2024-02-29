module.exports = (app) => {

    const tblcounters = require("../../controllers/Database_host_controller/tbladdress.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
    
    // Create a new tblcounters
    router.post("/", tblcounters.create);
    
    // Retrieve all tblcounterss
    router.get("/", tblcounters.findAll);
    
    // Retrieve a single tblcounters with id
    router.get("/:id", tblcounters.findOne);
    
    // Update a tblcounters with id
    router.put("/:id", tblcounters.update);
    
    // Delete a tblcounters with id
    router.delete("/:id", tblcounters.delete);
    
    // Delete all tblcounterss
    router.delete("/", tblcounters.deleteAll);
    
    app.use("/api/tblcounters", router);
        
    };
    