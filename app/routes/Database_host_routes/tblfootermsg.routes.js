module.exports = (app) => {

    const tblfootermsg = require("../../controllers/Database_host_controller/tblfootermsg.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
    
    // Create a new tblfootermsg
    router.post("/", tblfootermsg.create);
    
    // Retrieve all tblfootermsgs
    router.get("/", tblfootermsg.findAll);
    
    // Retrieve a single tblfootermsg with id
    router.get("/:id", tblfootermsg.findOne);
    
    // Update a tblfootermsg with id
    router.put("/:id", tblfootermsg.update);
    
    // Delete a tblfootermsg with id
    router.delete("/:id", tblfootermsg.delete);
    
    // Delete all tblfootermsgs
    router.delete("/", tblfootermsg.deleteAll);
    
    app.use("/api/tblfootermsg", router);
        
    };
    