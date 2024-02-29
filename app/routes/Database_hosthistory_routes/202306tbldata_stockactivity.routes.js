module.exports = (app) => {
    // const tutorials = require("../controllers/tutorial.controller.js");
    const tbldata_stockactivity = require("../../controllers/Database_hosthistory_controller/202306tbldata_stockactivity.controller");
    const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
  
    // Create a new tbldata_stockactivity
    router.post("/", tbldata_stockactivity.create);
  
    // Retrieve all tbldata_stockactivity
    router.get("/", tbldata_stockactivity.findAll);
  
    // Retrieve all published tbldata_stockactivity
    router.get("/published", tbldata_stockactivity.findAllPublished);
  
    // Retrieve a single tbldata_stockactivity with id
    router.get("/:id", tbldata_stockactivity.findOne);
  
    // Update a tbldata_stockactivity with id
    router.put("/:id", tbldata_stockactivity.update);
  
    // Delete a tbldata_stockactivity with id
    router.delete("/:id", tbldata_stockactivity.delete);
  
    // Delete all tbldata_stockactivity
    router.delete("/", tbldata_stockactivity.deleteAll);
  
    app.use("/api/202306tbldata_stockactivity", router);
  };
  