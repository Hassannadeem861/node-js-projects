module.exports = (app) => {

    const listcredage = require("../../controllers/Database_hosthistory_controller/tbllistcredage.controller");
    //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
      var router = require("express").Router();
    // Create a new listcredage
    router.post("/", listcredage.create);
    
    // Retrieve all listcredage
    router.get("/", listcredage.findAll);
    
    // Retrieve a single listcredage with id
    router.get("/:id", listcredage.findOne);
    
    // Update a listcredage with id
    router.put("/:id", listcredage.update);
    
    // Delete a listcredage with id
    router.delete("/:id", listcredage.delete);
    
    // Delete all listcredage
    router.delete("/", listcredage.deleteAll);
    
    app.use("/api/tbllistcredage", router);
        
    };
    