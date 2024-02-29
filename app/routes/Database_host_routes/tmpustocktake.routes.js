module.exports = (app) => {
   
  const tmpustocktake = require("../../controllers/Database_host_controller/tmpustocktake.controller");
  // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
  var router = require("express").Router();
  
    // Create a new tmpustocktake
    router.post("/", tmpustocktake.create);
  
    // Retrieve all tmpustocktake
    router.get("/", tmpustocktake.findAll);
  
    // Retrieve all published tmpustocktake
    router.get("/published", tmpustocktake.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tmpustocktake.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tmpustocktake.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tmpustocktake.delete);
  
    // Delete all tmpustocktake
    router.delete("/", tmpustocktake.deleteAll);
  
    app.use("/api/tmpustocktake", router);
  };
  