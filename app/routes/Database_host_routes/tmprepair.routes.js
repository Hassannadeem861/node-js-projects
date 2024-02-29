module.exports = (app) => {
   
  const tmprepair = require("../../controllers/Database_host_controller/tmprepair.controller");
  // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
  var router = require("express").Router();

    // Create a new tmprepair
    router.post("/", tmprepair.create);
  
    // Retrieve all tmprepair
    router.get("/", tmprepair.findAll);
  
    // Retrieve all published tmprepair
    router.get("/published", tmprepair.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tmprepair.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tmprepair.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tmprepair.delete);
  
    // Delete all tmprepair
    router.delete("/", tmprepair.deleteAll);
  
    app.use("/api/tmprepair", router);
  };
  