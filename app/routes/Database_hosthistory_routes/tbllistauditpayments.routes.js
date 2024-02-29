module.exports = (app) => {

    const listauditpayments = require("../../controllers/Database_hosthistory_controller/tbllistauditpayments.controller");
    //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
      var router = require("express").Router();
    
    // Create a new listauditpayments
    router.post("/", listauditpayments.create);
    
    // Retrieve all listauditpayments
    router.get("/", listauditpayments.findAll);
    
    // Retrieve a single listauditpayments with id
    router.get("/:id", listauditpayments.findOne);
    
    // Update a listauditpayments with id
    router.put("/:id", listauditpayments.update);
    
    // Delete a listauditpayments with id
    router.delete("/:id", listauditpayments.delete);
    
    // Delete all listauditpayments
    router.delete("/", listauditpayments.deleteAll);
    
    app.use("/api/tbllistauditpayments", router);
        
    };
    