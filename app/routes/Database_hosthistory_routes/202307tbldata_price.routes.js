module.exports = (app) => {
    // const tutorials = require("../controllers/tutorial.controller.js");
    const tbldata_price = require("../../controllers/Database_hosthistory_controller/202307tbldata_price.controller");
    //const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
    var router = require("express").Router();
  
    // Create a new tbldata_price
    router.post("/", tbldata_price.create);
  
    // Retrieve all tbldata_price
    router.get("/", tbldata_price.findAll);
  
    // Retrieve all published tbldata_price
    router.get("/published", tbldata_price.findAllPublished);
  
    // Retrieve a single tbldata_price with id
    router.get("/:id", tbldata_price.findOne);
  
    // Update a tbldata_price with id
    router.put("/:id", tbldata_price.update);
  
    // Delete a tbldata_price with id
    router.delete("/:id", tbldata_price.delete);
  
    // Delete all tbldata_price
    router.delete("/", tbldata_price.deleteAll);
  
    app.use("/api/202307tbldata_price", router);
  };
  