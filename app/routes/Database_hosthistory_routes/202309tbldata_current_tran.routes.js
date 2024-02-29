module.exports = (app) => {
    // routes/tbldata_current_tran.routes.js
    const tbl_datacurrenttran = require("../../controllers/Database_hosthistory_controller/202306tbldata_current_tran.controller");
  //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
    var router = require("express").Router();
    
    // Create a new tbl_datacurrenttran
    router.post('/', tbl_datacurrenttran.create);
    
    // Retrieve all tbl_datacurrenttran
    router.get('/', tbl_datacurrenttran.findAll);
    
    // Retrieve a single tbl_datacurrenttran by id
    router.get('/:id', tbl_datacurrenttran.findOne);
    
    // Update a tbl_datacurrenttran by id
    router.put('/:id', tbl_datacurrenttran.update);
    
    // Delete a tbl_datacurrenttran by id
    router.delete('/:id', tbl_datacurrenttran.delete);
    
    // Delete all tbl_datacurrenttran
    router.delete('/', tbl_datacurrenttran.deleteAll);
    
    app.use("/api/202309tbldata_current_tran", router);
    
    };
    