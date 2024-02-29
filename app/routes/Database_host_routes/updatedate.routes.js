module.exports = (app) => {
  const updatedate = require("../../controllers/Database_host_controller/updatedate.controller");
  // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
  var router = require("express").Router();
  
    // Create a new updatedate
    router.post("/", updatedate.create);
  
    // Retrieve all updatedate
    router.get("/", updatedate.findAll);
  
    // Retrieve all published updatedate
    router.get("/published", updatedate.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", updatedate.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", updatedate.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", updatedate.delete);
  
    // Delete all updatedate
    router.delete("/", updatedate.deleteAll);
  
    app.use("/api/updatedate", router);
  };
  