module.exports = (app) => {

    const tblgroupitemsa = require("../../controllers/Database_host_controller/tblgroupitemsa.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
    
    // Create a new tblgroupitemsa
    router.post("/", tblgroupitemsa.create);
    
    // Retrieve all tblgroupitemsa
    router.get("/", tblgroupitemsa.findAll);
    
    // Retrieve a single tblgroupitemsa with id
    router.get("/:id", tblgroupitemsa.findOne);
    
    // Update a tblgroupitemsa with id
    router.put("/:id", tblgroupitemsa.update);
    
    // Delete a tblgroupitemsa with id
    router.delete("/:id", tblgroupitemsa.delete);
    
    // Delete all tblgroupitemsa
    router.delete("/", tblgroupitemsa.deleteAll);
    
    app.use("/api/tblgroup_itemsa", router);
        
    };
    