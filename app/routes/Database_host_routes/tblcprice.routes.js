module.exports = (app) => {

    const tblcprice = require("../../controllers/Database_host_controller/tblcprice.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
    
    // Create a new tblcprice
    router.post("/", tblcprice.create);
    
    // Retrieve all tblcprices
    router.get("/", tblcprice.findAll);
    
    // Retrieve a single tblcprice with id
    router.get("/:id", tblcprice.findOne);
    
    // Update a tblcprice with id
    router.put("/:id", tblcprice.update);
    
    // Delete a tblcprice with id
    router.delete("/:id", tblcprice.delete);
    
    // Delete all tblcprices
    router.delete("/", tblcprice.deleteAll);
    
    app.use("/api/tblcprice", router);
        
    };
    