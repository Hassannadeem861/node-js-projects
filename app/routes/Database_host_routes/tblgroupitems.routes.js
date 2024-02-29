module.exports = (app) => {

    const tblgroupitems = require("../../controllers/Database_host_controller/tblgroupitems.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
    
    // Create a new tblgroupitems
    router.post("/", tblgroupitems.create);
    
    // Retrieve all tblgroupitems
    router.get("/", tblgroupitems.findAll);
    
    // Retrieve a single tblgroupitems with id
    router.get("/:id", tblgroupitems.findOne);
    
    // Update a tblgroupitems with id
    router.put("/:id", tblgroupitems.update);
    
    // Delete a tblgroupitems with id
    router.delete("/:id", tblgroupitems.delete);
    
    // Delete all tblgroupitems
    router.delete("/", tblgroupitems.deleteAll);
    
    app.use("/api/tblgroupitems", router);
        
    };
    