module.exports = (app) => {
   
  const tmpsurcharge = require("../../controllers/Database_host_controller/tmpsurcharge.controller");
  // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
  var router = require("express").Router();
  
    // Create a new tmpsurcharge
    router.post("/", tmpsurcharge.create);
  
    // Retrieve all tmpsurcharge
    router.get("/", tmpsurcharge.findAll);
  
    // Retrieve all published tmpsurcharge
    router.get("/published", tmpsurcharge.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tmpsurcharge.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tmpsurcharge.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tmpsurcharge.delete);
  
    // Delete all tmpsurcharge
    router.delete("/", tmpsurcharge.deleteAll);
  
    app.use("/api/tmpsurcharge", router);
  };
  