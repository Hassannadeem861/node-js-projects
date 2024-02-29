module.exports = (app) => {

    const tbladdress = require("../../controllers/Database_host_controller/tbladdress.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
    
    // Create a new tbladdress
    router.post("/", tbladdress.create);
    
    // Retrieve all tbladdresss
    router.get("/", tbladdress.findAll);
    
    // Retrieve a single tbladdress with id
    router.get("/:id", tbladdress.findOne);
    
    // Update a tbladdress with id
    router.put("/:id", tbladdress.update);
    
    // Delete a tbladdress with id
    router.delete("/:id", tbladdress.delete);
    
    // Delete all tbladdresss
    router.delete("/", tbladdress.deleteAll);
    
    app.use("/api/tbladdress", router);
        
    };
    