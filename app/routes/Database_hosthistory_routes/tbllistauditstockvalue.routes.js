module.exports = (app) => {

    const listauditstockvalue = require("../../controllers/Database_hosthistory_controller/tbllistauditstockvalue.controller");
    //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
      var router = require("express").Router();
    // Create a new listauditstockvalue
    router.post("/", listauditstockvalue.create);
    
    // Retrieve all listauditstockvalue
    router.get("/", listauditstockvalue.findAll);
    
    // Retrieve a single listauditstockvalue with id
    router.get("/:id", listauditstockvalue.findOne);
    
    // Update a listauditstockvalue with id
    router.put("/:id", listauditstockvalue.update);
    
    // Delete a listauditstockvalue with id
    router.delete("/:id", listauditstockvalue.delete);
    
    // Delete all listauditstockvalue
    router.delete("/", listauditstockvalue.deleteAll);
    
    app.use("/api/tbllistauditstockvalue", router);
        
    };
    