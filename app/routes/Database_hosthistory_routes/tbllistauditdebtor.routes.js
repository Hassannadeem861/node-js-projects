module.exports = (app) => {

    const listauditdebtors = require("../../controllers/Database_hosthistory_controller/tbllistauditdebtor.controller");
    //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
      var router = require("express").Router();
    
    // Create a new Listauditclaim
    router.post("/", listauditdebtors.create);
    
    // Retrieve all Listauditclaims
    router.get("/", listauditdebtors.findAll);
    
    // Retrieve a single Listauditclaim with id
    router.get("/:id", listauditdebtors.findOne);
    
    // Update a Listauditclaim with id
    router.put("/:id", listauditdebtors.update);
    
    // Delete a Listauditclaim with id
    router.delete("/:id", listauditdebtors.delete);
    
    // Delete all Listauditclaims
    router.delete("/", listauditdebtors.deleteAll);
    
    app.use("/api/tbllistauditdebtor", router);
        
    };
    