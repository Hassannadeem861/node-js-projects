module.exports = (app) => {
    const tmpdelivery = require("../../controllers/Database_host_controller/tmpdelivery.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
    
      // Create a new tmpdelivery
      router.post("/", tmpdelivery.create);
    
      // Retrieve all tmpdelivery
      router.get("/", tmpdelivery.findAll);
    
      // Retrieve all published tmpdelivery
      router.get("/published", tmpdelivery.findAllPublished);
    
      // Retrieve a single Tutorial with id
      router.get("/:id", tmpdelivery.findOne);
    
      // Update a Tutorial with id
      router.put("/:id", tmpdelivery.update);
    
      // Delete a Tutorial with id
      router.delete("/:id", tmpdelivery.delete);
    
      // Delete all tmpdelivery
      router.delete("/", tmpdelivery.deleteAll);
    
      app.use("/api/tmpdelivery", router);
    };
    