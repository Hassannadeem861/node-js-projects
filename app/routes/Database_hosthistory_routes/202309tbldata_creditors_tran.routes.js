module.exports = app => {
  const tbldata_creditors_tran = require("../../controllers/Database_hosthistory_controller/202309tbldata_creditors_tran.controller");
  //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
    var router = require("express").Router();
  
    // Create a new tbldata_creditors_tran
    router.post("/", tbldata_creditors_tran.create);
  
    // Retrieve all tbldata_creditors_trans
    router.get("/", tbldata_creditors_tran.findAll);
  
    // Retrieve a single tbldata_creditors_tran with id
    router.get("/:id", tbldata_creditors_tran.findOne);
  
    // Update a tbldata_creditors_tran with id
    router.put("/:id", tbldata_creditors_tran.update);
  
    // Delete a tbldata_creditors_tran with id
    router.delete("/:id", tbldata_creditors_tran.delete);
  
    // Delete all tbldata_creditors_trans
    router.delete("/", tbldata_creditors_tran.deleteAll);
  
    app.use('/api/202309tbldata_creditors_tran', router);
  };
  