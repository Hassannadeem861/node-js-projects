module.exports = (app) => {

    const listauditsplittender = require("../../controllers/Database_hosthistory_controller/tbllistauditsplittender.controller");
    //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
      var router = require("express").Router();
    
    // Create a new listauditsplittender
    router.post("/", listauditsplittender.create);
    
    // Retrieve all listauditsplittender
    router.get("/", listauditsplittender.findAll);
    
    // Retrieve a single listauditsplittender with id
    router.get("/:id", listauditsplittender.findOne);
    
    // Update a listauditsplittender with id
    router.put("/:id", listauditsplittender.update);
    
    // Delete a listauditsplittender with id
    router.delete("/:id", listauditsplittender.delete);
    
    // Delete all listauditsplittender
    router.delete("/", listauditsplittender.deleteAll);
    
    app.use("/api/tbllistauditsplittender", router);
        
    };
    