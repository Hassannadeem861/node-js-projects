module.exports = (app) => {
    const tbldata_cash_up = require("../../controllers/Database_hosthistory_controller/202401tbldata_cashup.controller");
    //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
      var router = require("express").Router();
    // Create a new tbldata_cashup
    router.post('/', tbldata_cash_up.create);
    
    // Retrieve all tbldata_cashup
    router.get('/', tbldata_cash_up.findAll);
    
    // Retrieve a single tbldata_cashup by id
    router.get('/:id', tbldata_cash_up.findOne);
    
    // Update a tbldata_cashup by id
    router.put('/:id', tbldata_cash_up.update);
    
    // Delete a tbldata_cashup by id
    router.delete('/:id', tbldata_cash_up.delete);
    
    router.delete('/', tbldata_cash_up.deleteAll);
    
    app.use("/api/202401tbldata_cashup", router);
    
    
    };
    