module.exports = (app) => {
    const tbldata_currenttran = require("../../controllers/Database_hosthistory_controller/202401tbldata_current_tran.controller");
    //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
      var router = require("express").Router();
    
    // Create a new tbldata_current_tran
    router.post('/', tbldata_currenttran.create);
    
    // Retrieve all tbldata_current_tran
    router.get('/', tbldata_currenttran.findAll);
    
    // Retrieve a single tbldata_current_tran by id
    router.get('/:id', tbldata_currenttran.findOne);
    
    // Update a tbldata_current_tran by id
    router.put('/:id', tbldata_currenttran.update);
    
    // Delete a tbldata_current_tran by id
    router.delete('/:id', tbldata_currenttran.delete);
    
    // Delete all tbldata_current_tran
    router.delete('/', tbldata_currenttran.deleteAll);
    
    app.use("/api/202401tbldata_current_tran", router);
    
    };
    