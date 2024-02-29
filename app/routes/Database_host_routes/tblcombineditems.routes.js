module.exports = (app) => {

    const tblcombineditems = require("../../controllers/Database_host_controller/tblcombineditems.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
    
    // Create a new tblcombineditems
    router.post("/", tblcombineditems.create);
    
    // Retrieve all tblcombineditemss
    router.get("/", tblcombineditems.findAll);
    
    // Retrieve a single tblcombineditems with id
    router.get("/:id", tblcombineditems.findOne);
    
    // Update a tblcombineditems with id
    router.put("/:id", tblcombineditems.update);
    
    // Delete a tblcombineditems with id
    router.delete("/:id", tblcombineditems.delete);
    
    // Delete all tblcombineditemss
    router.delete("/", tblcombineditems.deleteAll);
    
    app.use("/api/tblcombineditems", router);
        
    };
    