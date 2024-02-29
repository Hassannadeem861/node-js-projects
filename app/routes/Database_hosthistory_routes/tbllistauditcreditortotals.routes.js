module.exports = (app) => {

    const listauditcreditortotals = require("../../controllers/Database_hosthistory_controller/tbllistauditcreditortotals.controller");
    //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
      var router = require("express").Router();

    // Create a new Listauditclaim
    router.post("/", listauditcreditortotals.create);
    
    // Retrieve all Listauditclaims
    router.get("/", listauditcreditortotals.findAll);
    
    // Retrieve a single Listauditclaim with id
    router.get("/:id", listauditcreditortotals.findOne);
    
    // Update a Listauditclaim with id
    router.put("/:id", listauditcreditortotals.update);
    
    // Delete a Listauditclaim with id
    router.delete("/:id", listauditcreditortotals.delete);
    
    // Delete all Listauditclaims
    router.delete("/", listauditcreditortotals.deleteAll);
    
    app.use("/api/tbllistauditcreditortotals", router);
        
    };
    