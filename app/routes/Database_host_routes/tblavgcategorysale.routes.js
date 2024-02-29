module.exports = (app) => {

    const tblavgcategorysale = require("../../controllers/Database_host_controller/tblavgcategorysale.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
    
    // Create a new tblavgcategorysale
    router.post("/", tblavgcategorysale.create);
    
    // Retrieve all tblavgcategorysales
    router.get("/", tblavgcategorysale.findAll);
    
    // Retrieve a single tblavgcategorysale with id
    router.get("/:id", tblavgcategorysale.findOne);
    
    // Update a tblavgcategorysale with id
    router.put("/:id", tblavgcategorysale.update);
    
    // Delete a tblavgcategorysale with id
    router.delete("/:id", tblavgcategorysale.delete);
    
    // Delete all tblavgcategorysales
    router.delete("/", tblavgcategorysale.deleteAll);
    
    app.use("/api/tblavgcategorysale", router);
        
    };
    