module.exports = (app) => {

    const tblbarcode = require("../../controllers/Database_host_controller/tblbarcode.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
    
    // Create a new tblbarcode
    router.post("/", tblbarcode.create);
    
    // Retrieve all tblbarcodes
    router.get("/", tblbarcode.findAll);
    
    // Retrieve a single tblbarcode with id
    router.get("/:id", tblbarcode.findOne);
    
    // Update a tblbarcode with id
    router.put("/:id", tblbarcode.update);
    
    // Delete a tblbarcode with id
    router.delete("/:id", tblbarcode.delete);
    
    // Delete all tblbarcodes
    router.delete("/", tblbarcode.deleteAll);
    
    app.use("/api/tblbarcode", router);
        
    };
    