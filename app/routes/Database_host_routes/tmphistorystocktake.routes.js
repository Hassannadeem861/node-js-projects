module.exports = (app) => {
    const tmphistorystocktake = require("../../controllers/Database_host_controller/tmphistorystocktake.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
    
      // Create a new tmphistorystocktake
      router.post("/", tmphistorystocktake.create);
    
      // Retrieve all tmphistorystocktake
      router.get("/", tmphistorystocktake.findAll);
    
      // Retrieve all published tmphistorystocktake
      router.get("/published", tmphistorystocktake.findAllPublished);
    
      // Retrieve a single Tutorial with id
      router.get("/:id", tmphistorystocktake.findOne);
    
      // Update a Tutorial with id
      router.put("/:id", tmphistorystocktake.update);
    
      // Delete a Tutorial with id
      router.delete("/:id", tmphistorystocktake.delete);
    
      // Delete all tmphistorystocktake
      router.delete("/", tmphistorystocktake.deleteAll);
    
      app.use("/api/tmphistorystocktake", router);
    };
    