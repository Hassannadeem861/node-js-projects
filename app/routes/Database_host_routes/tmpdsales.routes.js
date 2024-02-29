module.exports = (app) => {
    const tmpdsales = require("../../controllers/Database_host_controller/tmpdsales.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
    
      // Create a new tmpdsales
      router.post("/", tmpdsales.create);
    
      // Retrieve all tmpdsales
      router.get("/", tmpdsales.findAll);
    
      // Retrieve all published tmpdsales
      router.get("/published", tmpdsales.findAllPublished);
    
      // Retrieve a single Tutorial with id
      router.get("/:id", tmpdsales.findOne);
    
      // Update a Tutorial with id
      router.put("/:id", tmpdsales.update);
    
      // Delete a Tutorial with id
      router.delete("/:id", tmpdsales.delete);
    
      // Delete all tmpdsales
      router.delete("/", tmpdsales.deleteAll);
    
      app.use("/api/tmpdsales", router);
    };
    