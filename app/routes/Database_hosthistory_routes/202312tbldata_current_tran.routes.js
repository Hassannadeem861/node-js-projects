module.exports = (app) => {
    const tbldatacurrent_tran = require("../../controllers/Database_hosthistory_controller/202312tbldata_current_tran.controller");
  //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
    var router = require("express").Router();
    
    // Create a new tbldata_current_tran
    router.post('/', tbldatacurrent_tran.create);
    
    // Retrieve all tbldata_current_tran
    router.get('/', tbldatacurrent_tran.findAll);
    
    // Retrieve a single tbldata_current_tran by id
    router.get('/:id', tbldatacurrent_tran.findOne);
    
    // Update a tbldata_current_tran by id
    router.put('/:id', tbldatacurrent_tran.update);
    
    // Delete a tbldata_current_tran by id
    router.delete('/:id', tbldatacurrent_tran.delete);
    
    // Delete all tbldata_current_tran
    router.delete('/', tbldatacurrent_tran.deleteAll);
    
    app.use("/api/202312tbldata_current_tran", router);
    
    };
    