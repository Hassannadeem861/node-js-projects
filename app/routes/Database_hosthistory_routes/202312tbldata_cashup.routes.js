module.exports = (app) => {
    const tbldatacashup = require("../../controllers/Database_hosthistory_controller/202312tbldata_cashup.controller");
  //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
    var router = require("express").Router();
    
    // Create a new tbldata_cashup
    router.post('/', tbldatacashup.create);
    
    // Retrieve all tbldata_cashup
    router.get('/', tbldatacashup.findAll);
    
    // Retrieve a single tbldata_cashup by id
    router.get('/:id', tbldatacashup.findOne);
    
    // Update a tbldata_cashup by id
    router.put('/:id', tbldatacashup.update);
    
    // Delete a tbldata_cashup by id
    router.delete('/:id', tbldatacashup.delete);
    
    router.delete('/', tbldatacashup.deleteAll);
    
    app.use("/api/202312tbldata_cashup", router);
    
    
    };
    