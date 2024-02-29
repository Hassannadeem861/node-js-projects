module.exports = (app) => {

    const tbldebtor_groups = require("../../controllers/Database_hostdebtors_controller/tbldebtor_groups.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
  
    
    // Create a new tbldebtor_groups
    router.post("/", tbldebtor_groups.create);
    
    // Retrieve all tbldebtor_groupss
    router.get("/", tbldebtor_groups.findAll);
    
    // Retrieve a single tbldebtor_groups with id
    router.get("/:id", tbldebtor_groups.findOne);
    
    // Update a tbldebtor_groups with id
    router.put("/:id", tbldebtor_groups.update);
    
    // Delete a tbldebtor_groups with id
    router.delete("/:id", tbldebtor_groups.delete);
    
    // Delete all tbldebtor_groupss
    router.delete("/", tbldebtor_groups.deleteAll);
    
    app.use("/api/tbldebtor_groups", router);
        
    };
    