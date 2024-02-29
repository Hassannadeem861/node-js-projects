module.exports = (app) => {
    // const tutorials = require("../controllers/tutorial.controller.js");
    const tbldata_current_tran = require("../../controllers/Database_hosthistory_controller/202306tbldata_current_tran.controller");
    const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
  
    // Create a new tbldata_current_tran
    router.post("/", tbldata_current_tran.create);
  
    // Retrieve all tbldata_current_tran
    router.get("/", tbldata_current_tran.findAll);
  
    // Retrieve all published tbldata_current_tran
    router.get("/published", tbldata_current_tran.findAllPublished);
  
    // Retrieve a single tbldata_current_tran with id
    router.get("/:id", tbldata_current_tran.findOne);
  
    // Update a tbldata_current_tran with id
    router.put("/:id", tbldata_current_tran.update);
  
    // Delete a tbldata_current_tran with id
    router.delete("/:id", tbldata_current_tran.delete);
  
    // Delete all tbldata_current_tran
    router.delete("/", tbldata_current_tran.deleteAll);
  
    app.use("/api/202306tbldata_current_tran", router);
  };
  