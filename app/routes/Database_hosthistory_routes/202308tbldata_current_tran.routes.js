module.exports = (app) => {
    // routes/tbldata_current_tran.routes.js
    
    const tbldata08currenttran = require("../../controllers/Database_hosthistory_controller/202308tbldata_current_tran.controller");
  //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
    var router = require("express").Router();
    
    // Create a new tbldata08currenttran
    router.post('/', tbldata08currenttran.create);
    
    // Retrieve all tbldata08currenttran
    router.get('/', tbldata08currenttran.findAll);
    
    // Retrieve a single tbldata08currenttran by id
    router.get('/:id', tbldata08currenttran.findOne);
    
    // Update a tbldata08currenttran by id
    router.put('/:id', tbldata08currenttran.update);
    
    // Delete a tbldata08currenttran by id
    router.delete('/:id', tbldata08currenttran.delete);
    
    // Delete all tbldata08currenttran
    router.delete('/', tbldata08currenttran.deleteAll);
    
    app.use("/api/202308tbldata_current_tran", router);
    
    };
    