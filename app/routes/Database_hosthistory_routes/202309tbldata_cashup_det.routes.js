module.exports = (app) => {
    // routes/202310tbldata_cashup_det.routes.js
    const tbldatacashupdet = require("../../controllers/Database_hosthistory_controller/202309tbldata_cashup_det.controller");
    //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
      var router = require("express").Router();
    
    // Create a new tbldatacashupdet
    router.post("/", tbldatacashupdet.create);
    
    // Retrieve all tbldatacashupdet
    router.get("/", tbldatacashupdet.findAll);
    
    // Retrieve a single tbldatacashupdet with id
    router.get("/:id", tbldatacashupdet.findOne);
    
    // Update a tbldatacashupdet with id
    router.put("/:id", tbldatacashupdet.update);
    
    // Delete a tbldatacashupdet with id
    router.delete("/:id", tbldatacashupdet.delete);
    
    // Delete all tbldatacashupdet
    router.delete("/", tbldatacashupdet.deleteAll);
    
    app.use("/api/202309tbldata_cashup_det", router);
    
    
    };