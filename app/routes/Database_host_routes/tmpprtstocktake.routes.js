module.exports = (app) => {
    const tmpprtstocktake = require("../../controllers/Database_host_controller/tmpprtstocktake.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
    
      // Create a new tmpprtstocktake
      router.post("/", tmpprtstocktake.create);
    
      // Retrieve all tmpprtstocktake
      router.get("/", tmpprtstocktake.findAll);
    
      // Retrieve all published tmpprtstocktake
      router.get("/published", tmpprtstocktake.findAllPublished);
    
      // Retrieve a single tmpprtstocktake with id
      router.get("/:id", tmpprtstocktake.findOne);
    
      // Update a tmpprtstocktake with id
      router.put("/:id", tmpprtstocktake.update);
    
      // Delete a tmpprtstocktake with id
      router.delete("/:id", tmpprtstocktake.delete);
    
      // Delete all tmpinvoicesearch
      router.delete("/", tmpprtstocktake.deleteAll);
    
      app.use("/api/tmpprtstocktake", router);
    };
    