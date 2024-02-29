module.exports = (app) => {

    const tbleod = require("../../controllers/Database_host_controller/tbleod.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
    
    // Create a new tbleod
    router.post("/", tbleod.create);
    
    // Retrieve all tbleods
    router.get("/", tbleod.findAll);
    
    // Retrieve a single tbleod with id
    router.get("/:id", tbleod.findOne);
    
    // Update a tbleod with id
    router.put("/:id", tbleod.update);
    
    // Delete a tbleod with id
    router.delete("/:id", tbleod.delete);
    
    // Delete all tbleods
    router.delete("/", tbleod.deleteAll);
    
    app.use("/api/tbleod", router);
        
    };
    