module.exports = (app) => {
    // const tutorials = require("../controllers/tutorial.controller.js");
    const tbldata_cancel_tran = require("../../controllers/Database_hosthistory_controller/202306tbldata_cancel_tran.controller");
    const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
  
    // Create a new Tbldata_cancel_tran
    router.post("/", tbldata_cancel_tran.create);
  
    // Retrieve all Tbldata_cancel_tran
    router.get("/", tbldata_cancel_tran.findAll);
  
    // Retrieve all published Tbldata_cancel_tran
    router.get("/published", tbldata_cancel_tran.findAllPublished);
  
    // Retrieve a single Tbldata_cancel_tran with id
    router.get("/:id", tbldata_cancel_tran.findOne);
  
    // Update a Tbldata_cancel_tran with id
    router.put("/:id", tbldata_cancel_tran.update);
  
    // Delete a Tbldata_cancel_tran with id
    router.delete("/:id", tbldata_cancel_tran.delete);
  
    // Delete all Tbldata_cancel_tran
    router.delete("/", tbldata_cancel_tran.deleteAll);
  
    app.use("/api/tbldata_cancel_tran", router);
  };
  