module.exports = (app) => {
  const tbldatacancel_tran = require("../../controllers/Database_hosthistory_controller/202311tbldata_cancel_tran.controller");
  //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
    var router = require("express").Router();
  
    // Create a new Tbldata_cancel_tran
    router.post("/", tbldatacancel_tran.create);
  
    // Retrieve all Tbldata_cancel_tran
    router.get("/", tbldatacancel_tran.findAll);
  
    // Retrieve all published Tbldata_cancel_tran
    router.get("/published", tbldatacancel_tran.findAllPublished);
  
    // Retrieve a single Tbldata_cancel_tran with id
    router.get("/:id", tbldatacancel_tran.findOne);
  
    // Update a Tbldata_cancel_tran with id
    router.put("/:id", tbldatacancel_tran.update);
  
    // Delete a Tbldata_cancel_tran with id
    router.delete("/:id", tbldatacancel_tran.delete);
  
    // Delete all Tbldata_cancel_tran
    router.delete("/", tbldatacancel_tran.deleteAll);
  
    app.use("/api/202311tbldata_cancel_tran", router);
  };
  