module.exports = (app) => {

    const tblexcelfile = require("../../controllers/Database_host_controller/tblexcelfile.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
    
    // Create a new tblexcelfile
    router.post("/", tblexcelfile.create);
    
    // Retrieve all tblexcelfiles
    router.get("/", tblexcelfile.findAll);
    
    // Retrieve a single tblexcelfile with id
    router.get("/:id", tblexcelfile.findOne);
    
    // Update a tblexcelfile with id
    router.put("/:id", tblexcelfile.update);
    
    // Delete a tblexcelfile with id
    router.delete("/:id", tblexcelfile.delete);
    
    // Delete all tblexcelfiles
    router.delete("/", tblexcelfile.deleteAll);
    
    app.use("/api/tblexcelfile", router);
        
    };
    