module.exports = (app) => {

    const tbldatacreditor_tran = require("../../controllers/Database_hosthistory_controller/tbldatacreditor_tran.controller");
  //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
    var router = require("express").Router();
    
    // Create a new tbldatacreditor_tran
    router.post("/", tbldatacreditor_tran.create);
    
    // Retrieve all tbldatacreditor_trans
    router.get("/", tbldatacreditor_tran.findAll);
    
    // Retrieve a single tbldatacreditor_tran with id
    router.get("/:id", tbldatacreditor_tran.findOne);
    
    // Update a tbldatacreditor_tran with id
    router.put("/:id", tbldatacreditor_tran.update);
    
    // Delete a tbldatacreditor_tran with id
    router.delete("/:id", tbldatacreditor_tran.delete);
    
    // Delete all tbldatacreditor_trans
    router.delete("/", tbldatacreditor_tran.deleteAll);
    
    app.use("/api/tbldatacreditor_tran", router);
        
    };
    