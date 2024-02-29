module.exports = (app) => {

    const listauditorder = require("../../controllers/Database_hosthistory_controller/tbllistauditorder.controller");
    //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
      var router = require("express").Router();
    // Create a new listauditorder
    router.post("/", listauditorder.create);
    
    // Retrieve all listauditorder
    router.get("/", listauditorder.findAll);
    
    // Retrieve a single listauditorder with id
    router.get("/:id", listauditorder.findOne);
    
    // Update a listauditorder with id
    router.put("/:id", listauditorder.update);
    
    // Delete a listauditorder with id
    router.delete("/:id", listauditorder.delete);
    
    // Delete all listauditorder
    router.delete("/", listauditorder.deleteAll);
    
    app.use("/api/tbllistauditorder", router);
        
    };
    