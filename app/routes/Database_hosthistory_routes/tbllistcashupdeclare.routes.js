module.exports = (app) => {

    const listcashupdeclare = require("../../controllers/Database_hosthistory_controller/tbllistcashupdeclare.controller");
    //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
      var router = require("express").Router();
    // Create a new listcashupdeclare
    router.post("/", listcashupdeclare.create);
    
    // Retrieve all listcashupdeclare
    router.get("/", listcashupdeclare.findAll);
    
    // Retrieve a single listcashupdeclare with id
    router.get("/:id", listcashupdeclare.findOne);
    
    // Update a listcashupdeclare with id
    router.put("/:id", listcashupdeclare.update);
    
    // Delete a listcashupdeclare with id
    router.delete("/:id", listcashupdeclare.delete);
    
    // Delete all listcashupdeclare
    router.delete("/", listcashupdeclare.deleteAll);
    
    app.use("/api/tbllistcashupdeclare", router);
        
    };
    