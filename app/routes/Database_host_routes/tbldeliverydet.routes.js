module.exports = (app) => {

    const tbldeliverydet = require("../../controllers/Database_host_controller/tbldeliverydet.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
    
    // Create a new Listauditclaim
    router.post("/", tbldeliverydet.create);
    
    // Retrieve all Listauditclaims
    router.get("/", tbldeliverydet.findAll);
    
    // Retrieve a single Listauditclaim with id
    router.get("/:id", tbldeliverydet.findOne);
    
    // Update a Listauditclaim with id
    router.put("/:id", tbldeliverydet.update);
    
    // Delete a Listauditclaim with id
    router.delete("/:id", tbldeliverydet.delete);
    
    // Delete all Listauditclaims
    router.delete("/", tbldeliverydet.deleteAll);
    
    app.use("/api/tbldeliverydet", router);
        
    };
    