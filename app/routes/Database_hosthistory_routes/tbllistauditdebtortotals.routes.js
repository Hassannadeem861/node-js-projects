module.exports = (app) => {

    const listauditdebtortotals = require("../../controllers/Database_hosthistory_controller/tbllistauditdebtortotals.controller");
  //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
    var router = require("express").Router();
    
    // Create a new listauditdebtortotals
    router.post("/", listauditdebtortotals.create);
    
    // Retrieve all listauditdebtortotals
    router.get("/", listauditdebtortotals.findAll);
    
    // Retrieve a single listauditdebtortotals with id
    router.get("/:id", listauditdebtortotals.findOne);
    
    // Update a listauditdebtortotals with id
    router.put("/:id", listauditdebtortotals.update);
    
    // Delete a listauditdebtortotals with id
    router.delete("/:id", listauditdebtortotals.delete);
    
    // Delete all listauditdebtortotals
    router.delete("/", listauditdebtortotals.deleteAll);
    
    app.use("/api/tbllistauditdebtortotals", router);
        
    };
    