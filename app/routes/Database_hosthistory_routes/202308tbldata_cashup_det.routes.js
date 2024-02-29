module.exports = (app) => {
    // routes/202310tbldata_cashup_det.routes.js
    const tbldatacash_updet = require("../../controllers/Database_hosthistory_controller/202308tbldata_cashup_det.controller");
    const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
  
    
    // Create a new tbldatacash_updet
    router.post("/", tbldatacash_updet.create);
    
    // Retrieve all tbldatacash_updet
    router.get("/", tbldatacash_updet.findAll);
    
    // Retrieve a single tbldatacash_updet with id
    router.get("/:id", tbldatacash_updet.findOne);
    
    // Update a tbldatacash_updet with id
    router.put("/:id", tbldatacash_updet.update);
    
    // Delete a tbldatacash_updet with id
    router.delete("/:id", tbldatacash_updet.delete);
    
    // Delete all tbldatacash_updet
    router.delete("/", tbldatacash_updet.deleteAll);
    
    app.use("/api/202308tbldata_cashup_det", router);
    
    
    };