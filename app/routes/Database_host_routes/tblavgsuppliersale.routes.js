module.exports = (app) => {

    const tblavgsuppliersale = require("../../controllers/Database_host_controller/tblavgsuppliersale.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
    
    // Create a new tblavgsuppliersale
    router.post("/", tblavgsuppliersale.create);
    
    // Retrieve all tblavgsuppliersales
    router.get("/", tblavgsuppliersale.findAll);
    
    // Retrieve a single tblavgsuppliersale with id
    router.get("/:id", tblavgsuppliersale.findOne);
    
    // Update a tblavgsuppliersale with id
    router.put("/:id", tblavgsuppliersale.update);
    
    // Delete a tblavgsuppliersale with id
    router.delete("/:id", tblavgsuppliersale.delete);
    
    // Delete all tblavgsuppliersales
    router.delete("/", tblavgsuppliersale.deleteAll);
    
    app.use("/api/tblavgsuppliersale", router);
        
    };
    