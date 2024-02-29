module.exports = (app) => {

    const tbldatacancel_tran = require("../../controllers/Database_hosthistory_controller/tbldatacancel_tran.controller");
    //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
      var router = require("express").Router();
    
    // Create a new tbldatacancel_tran
    router.post("/", tbldatacancel_tran.create);
    
    // Retrieve all tbldatacancel_trans
    router.get("/", tbldatacancel_tran.findAll);
    
    // Retrieve a single tbldatacancel_tran with id
    router.get("/:id", tbldatacancel_tran.findOne);
    
    // Update a tbldatacancel_tran with id
    router.put("/:id", tbldatacancel_tran.update);
    
    // Delete a tbldatacancel_tran with id
    router.delete("/:id", tbldatacancel_tran.delete);
    
    // Delete all tbldatacancel_trans
    router.delete("/", tbldatacancel_tran.deleteAll);
    
    app.use("/api/tbldatacancel_tran", router);
        
    };
    