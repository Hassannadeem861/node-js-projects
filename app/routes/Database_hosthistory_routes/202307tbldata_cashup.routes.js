module.exports = (app) => {
    // const tutorials = require("../controllers/tutorial.controller.js");
    const tbldata_cash_up = require("../../controllers/Database_hosthistory_controller/202307tbldata_cashup.controller");
  //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
    var router = require("express").Router();
  
    // Create a new tbldata_cashup
    router.post("/", tbldata_cash_up.create);
  
    // Retrieve all tbldata_cash_up
    router.get("/", tbldata_cash_up.findAll);
  
    // Retrieve all published tbldata_cash_up
    router.get("/published", tbldata_cash_up.findAllPublished);
  
    // Retrieve a single tbldata_cash_up with id
    router.get("/:id", tbldata_cash_up.findOne);
  
    // Update a tbldata_cash_up with id
    router.put("/:id", tbldata_cash_up.update);
  
    // Delete a tbldata_cash_up with id
    router.delete("/:id", tbldata_cash_up.delete);
  
    // Delete all tbldata_cash_up
    router.delete("/", tbldata_cash_up.deleteAll);
  
    app.use("/api/202307tbldata_cash_up", router);
  };
  