module.exports = (app) => {
    // const tutorials = require("../controllers/tutorial.controller.js");
    const tbldata_cashup = require("../../controllers/Database_hosthistory_controller/202308tbldata_cashup.controller");
  //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
    var router = require("express").Router();
  
    // Create a new tbldata_cashup
    router.post("/", tbldata_cashup.create);
  
    // Retrieve all tbldata_cash_up
    router.get("/", tbldata_cashup.findAll);
  
    // Retrieve all published tbldata_cash_up
    router.get("/published", tbldata_cashup.findAllPublished);
  
    // Retrieve a single tbldata_cash_up with id
    router.get("/:id", tbldata_cashup.findOne);
  
    // Update a tbldata_cash_up with id
    router.put("/:id", tbldata_cashup.update);
  
    // Delete a tbldata_cash_up with id
    router.delete("/:id", tbldata_cashup.delete);
  
    // Delete all tbldata_cash_up
    router.delete("/", tbldata_cashup.deleteAll);
  
    app.use("/api/202308tbldata_cashup", router);
  };
  