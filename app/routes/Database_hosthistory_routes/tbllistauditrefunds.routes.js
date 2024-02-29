module.exports = (app) => {

    const listauditrefunds = require("../../controllers/Database_hosthistory_controller/tbllistauditrefunds.controller");
    //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
      var router = require("express").Router();
    
    // Create a new listauditrefunds
    router.post("/", listauditrefunds.create);
    
    // Retrieve all listauditrefunds
    router.get("/", listauditrefunds.findAll);
    
    // Retrieve a single listauditrefunds with id
    router.get("/:id", listauditrefunds.findOne);
    
    // Update a listauditrefunds with id
    router.put("/:id", listauditrefunds.update);
    
    // Delete a listauditrefunds with id
    router.delete("/:id", listauditrefunds.delete);
    
    // Delete all listauditrefunds
    router.delete("/", listauditrefunds.deleteAll);
    
    app.use("/api/tbllistauditrefunds", router);
        
    };
    