module.exports = (app) => {

    const tblcounterpickingslip = require("../../controllers/Database_host_controller/tblcounterpickingslip.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
    
    // Create a new tblcounterpickingslip
    router.post("/", tblcounterpickingslip.create);
    
    // Retrieve all tblcounterpickingslips
    router.get("/", tblcounterpickingslip.findAll);
    
    // Retrieve a single tblcounterpickingslip with id
    router.get("/:id", tblcounterpickingslip.findOne);
    
    // Update a tblcounterpickingslip with id
    router.put("/:id", tblcounterpickingslip.update);
    
    // Delete a tblcounterpickingslip with id
    router.delete("/:id", tblcounterpickingslip.delete);
    
    // Delete all tblcounterpickingslips
    router.delete("/", tblcounterpickingslip.deleteAll);
    
    app.use("/api/tblcounterpickingslip", router);
        
    };
    