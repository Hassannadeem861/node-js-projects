module.exports = (app) => {

    const tblauditsales = require("../../controllers/Database_host_controller/tblauditsales.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
    
    // Create a new tblauditsales
    router.post("/", tblauditsales.create);
    
    // Retrieve all tblauditsaless
    router.get("/", tblauditsales.findAll);
    
    // Retrieve a single tblauditsales with id
    router.get("/:id", tblauditsales.findOne);
    
    // Update a tblauditsales with id
    router.put("/:id", tblauditsales.update);
    
    // Delete a tblauditsales with id
    router.delete("/:id", tblauditsales.delete);
    
    // Delete all tblauditsaless
    router.delete("/", tblauditsales.deleteAll);
    
    app.use("/api/tblauditsales", router);
        
    };
    