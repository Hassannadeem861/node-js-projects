module.exports = (app) => {

    const tmp = require("../../controllers/Database_hosthistory_controller/tbltmp.controller");
    //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
      var router = require("express").Router();
    
    // Create a new tmp
    router.post("/", tmp.create);
    
    // Retrieve all tmp
    router.get("/", tmp.findAll);
    
    // Retrieve a single tmp with id
    router.get("/:id", tmp.findOne);
    
    // Update a tmp with id
    router.put("/:id", tmp.update);
    
    // Delete a tmp with id
    router.delete("/:id", tmp.delete);
    
    // Delete all tmp
    router.delete("/", tmp.deleteAll);
    
    app.use("/api/tbltmp", router);
        
    };
    