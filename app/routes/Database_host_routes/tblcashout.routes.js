module.exports = (app) => {

    const tblcashout = require("../../controllers/Database_host_controller/tblcashout.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tblcashout
    router.post("/", tblcashout.create);
    
    // Retrieve all tblcashouts
    router.get("/", tblcashout.findAll);
    
    // Retrieve a single tblcashout with id
    router.get("/:id", tblcashout.findOne);
    
    // Update a tblcashout with id
    router.put("/:id", tblcashout.update);
    
    // Delete a tblcashout with id
    router.delete("/:id", tblcashout.delete);
    
    // Delete all tblcashouts
    router.delete("/", tblcashout.deleteAll);
    
    app.use("/api/tblcashout", router);
        
    };
    