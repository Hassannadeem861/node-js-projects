  
  
module.exports = (app) => {
  const tbldatastocktake = require("../../controllers/Database_hosthistory_controller/tbldatastocktake.controller");
  //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
    var router = require("express").Router();
  
    // Create a new tbldatastocktake
    router.post("/", tbldatastocktake.create);
  
    // Retrieve all tbldatastocktake
    router.get("/", tbldatastocktake.findAll);
  
    // Retrieve all published tbldatastocktake
    router.get("/published", tbldatastocktake.findAllPublished);
  
    // Retrieve a single tbldatastocktake with id
    router.get("/:id", tbldatastocktake.findOne);
  
    // Update a tbldatastocktake with id
    router.put("/:id", tbldatastocktake.update);
  
    // Delete a tbldatastocktake with id
    router.delete("/:id", tbldatastocktake.delete);
  
    // Delete all tbldatastocktake
    router.delete("/", tbldatastocktake.deleteAll);
  
    app.use("/api/tbldatastocktake", router);
  };
  