module.exports = (app) => {
  const tbldata_cashup = require("../../controllers/Database_hosthistory_controller/202306tbldata_cashup.controller");
  const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
  var router = require("express").Router();
  
    // Create a new tbldata_cashup
    router.post("/", tbldata_cashup.create);
  
    // Retrieve all tbldata_cashup
    router.get("/", tbldata_cashup.findAll);
  
    // Retrieve all published tbldata_cashup
    router.get("/published", tbldata_cashup.findAllPublished);
  
    // Retrieve a single tbldata_cashup with id
    router.get("/:id", tbldata_cashup.findOne);
  
    // Update a tbldata_cashup with id
    router.put("/:id", tbldata_cashup.update);
  
    // Delete a tbldata_cashup with id
    router.delete("/:id", tbldata_cashup.delete);
  
    // Delete all tbldata_cashup
    router.delete("/", tbldata_cashup.deleteAll);
  
    app.use("/api/202306tbldata_cashup", router);
  };
  