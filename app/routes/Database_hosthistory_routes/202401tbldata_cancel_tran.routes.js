module.exports = (app) => {
  const tbldata_canceltran = require("../../controllers/Database_hosthistory_controller/202401tbldata_cancel_tran.controller");
  //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
    var router = require("express").Router();
  
    // Create a new Tbldata_cancel_tran
    router.post("/", tbldata_canceltran.create);
  
    // Retrieve all Tbldata_cancel_tran
    router.get("/", tbldata_canceltran.findAll);
  
    // Retrieve all published Tbldata_cancel_tran
    router.get("/published", tbldata_canceltran.findAllPublished);
  
    // Retrieve a single Tbldata_cancel_tran with id
    router.get("/:id", tbldata_canceltran.findOne);
  
    // Update a Tbldata_cancel_tran with id
    router.put("/:id", tbldata_canceltran.update);
  
    // Delete a Tbldata_cancel_tran with id
    router.delete("/:id", tbldata_canceltran.delete);
  
    // Delete all Tbldata_cancel_tran
    router.delete("/", tbldata_canceltran.deleteAll);
  
    app.use("/api/202401tbldata_cancel_tran", router);
  };
  