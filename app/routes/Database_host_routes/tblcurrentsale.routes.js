module.exports = (app) => {

    const tblcurrentsale = require("../../controllers/Database_host_controller/tblcurrentsale.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
    
    // Create a new tblcurrentsale
    router.post("/", tblcurrentsale.create);
    
    // Retrieve all tblcurrentsales
    router.get("/", tblcurrentsale.findAll);
    
    // Retrieve a single tblcurrentsale with id
    router.get("/:id", tblcurrentsale.findOne);
    
    // Update a tblcurrentsale with id
    router.put("/:id", tblcurrentsale.update);
    
    // Delete a tblcurrentsale with id
    router.delete("/:id", tblcurrentsale.delete);
    
    // Delete all tblcurrentsales
    router.delete("/", tblcurrentsale.deleteAll);
    
    app.use("/api/tblcurrentsale", router);
        
    };
    