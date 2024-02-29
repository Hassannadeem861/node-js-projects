module.exports = (app) => {

    const tblcompany = require("../../controllers/Database_host_controller/tblcompany.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
    
    // Create a new tblcompany
    router.post("/", tblcompany.create);
    
    // Retrieve all tblcompanys
    router.get("/", tblcompany.findAll);
    
    // Retrieve a single tblcompany with id
    router.get("/:id", tblcompany.findOne);
    
    // Update a tblcompany with id
    router.put("/:id", tblcompany.update);
    
    // Delete a tblcompany with id
    router.delete("/:id", tblcompany.delete);
    
    // Delete all tblcompanys
    router.delete("/", tblcompany.deleteAll);
    
    app.use("/api/tblcompany", router);
        
    };
    