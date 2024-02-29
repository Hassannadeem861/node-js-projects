module.exports = (app) => {
   
  const tmpstocktake = require("../../controllers/Database_host_controller/tmpstocktake.controller");
  // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
  var router = require("express").Router();
  
    // Create a new tmpstocktake
    router.post("/", tmpstocktake.create);
  
    // Retrieve all tmpstocktake
    router.get("/", tmpstocktake.findAll);
  
    // Retrieve all published tmpstocktake
    router.get("/published", tmpstocktake.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tmpstocktake.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tmpstocktake.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tmpstocktake.delete);
  
    // Delete all tmpstocktake
    router.delete("/", tmpstocktake.deleteAll);
  
    app.use("/api/tmpstocktake", router);
  };
  