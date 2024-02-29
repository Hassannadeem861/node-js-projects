module.exports = (app) => {

    const listauditsupplier = require("../../controllers/Database_hosthistory_controller/tbllistauditsupplier.controller");
    //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
      var router = require("express").Router();
    // Create a new listauditsupplier
    router.post("/", listauditsupplier.create);
    
    // Retrieve all listauditsupplier
    router.get("/", listauditsupplier.findAll);
    
    // Retrieve a single listauditsupplier with id
    router.get("/:id", listauditsupplier.findOne);
    
    // Update a listauditsupplier with id
    router.put("/:id", listauditsupplier.update);
    
    // Delete a listauditsupplier with id
    router.delete("/:id", listauditsupplier.delete);
    
    // Delete all listauditsupplier
    router.delete("/", listauditsupplier.deleteAll);
    
    app.use("/api/tbllistauditsupplier", router);
        
    };
    