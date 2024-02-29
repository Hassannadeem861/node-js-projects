module.exports = (app) => {

    const tblfloat = require("../../controllers/Database_host_controller/tblfloat.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tblfloat
    router.post("/", tblfloat.create);
    
    // Retrieve all tblfloats
    router.get("/", tblfloat.findAll);
    
    // Retrieve a single tblfloat with id
    router.get("/:id", tblfloat.findOne);
    
    // Update a tblfloat with id
    router.put("/:id", tblfloat.update);
    
    // Delete a tblfloat with id
    router.delete("/:id", tblfloat.delete);
    
    // Delete all tblfloats
    router.delete("/", tblfloat.deleteAll);
    
    app.use("/api/tblfloat", router);
        
    };
    