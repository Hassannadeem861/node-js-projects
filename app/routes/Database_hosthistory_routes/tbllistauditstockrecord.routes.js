module.exports = (app) => {

    const listauditstockrecord = require("../../controllers/Database_hosthistory_controller/tbllistauditstockrecord.controller");
    //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
      var router = require("express").Router();
    // Create a new listauditstockrecord
    router.post("/", listauditstockrecord.create);
    
    // Retrieve all listauditstockrecord
    router.get("/", listauditstockrecord.findAll);
    
    // Retrieve a single listauditstockrecord with id
    router.get("/:id", listauditstockrecord.findOne);
    
    // Update a listauditstockrecord with id
    router.put("/:id", listauditstockrecord.update);
    
    // Delete a listauditstockrecord with id
    router.delete("/:id", listauditstockrecord.delete);
    
    // Delete all listauditstockrecord
    router.delete("/", listauditstockrecord.deleteAll);
    
    app.use("/api/tbllistauditstockrecord", router);
        
    };
    