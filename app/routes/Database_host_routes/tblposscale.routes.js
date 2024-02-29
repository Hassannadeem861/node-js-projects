module.exports = (app) => {
    const tblposscale = require("../../controllers/Database_host_controller/tblposscale.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
  
    // Create a new tblposscale
    router.post("/", tblposscale.create);
  
    // Retrieve all tblposscales
    router.get("/", tblposscale.findAll);
  
    // Retrieve all published tblposscales
    router.get("/published", tblposscale.findAllPublished);
  
    // Retrieve a single tblposscale with id
    router.get("/:id", tblposscale.findOne);
  
    // Update a tblposscale with id
    router.put("/:id", tblposscale.update);
  
    // Delete a tblposscale with id
    router.delete("/:id", tblposscale.delete);
  
    // Delete all tblposscales
    router.delete("/", tblposscale.deleteAll);
  
    app.use("/api/tblposscale", router);
};
