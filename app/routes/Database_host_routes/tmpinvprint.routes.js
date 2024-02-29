module.exports = (app) => {
    const tmpinvprint = require("../../controllers/Database_host_controller/tmpinvprint.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
    
      // Create a new tmpinvprint
      router.post("/", tmpinvprint.create);
    
      // Retrieve all tmpinvprint
      router.get("/", tmpinvprint.findAll);
    
      // Retrieve all published tmpinvprint
      router.get("/published", tmpinvprint.findAllPublished);
    
      // Retrieve a single Tutorial with id
      router.get("/:id", tmpinvprint.findOne);
    
      // Update a Tutorial with id
      router.put("/:id", tmpinvprint.update);
    
      // Delete a Tutorial with id
      router.delete("/:id", tmpinvprint.delete);
    
      // Delete all tmpinvoicesearch
      router.delete("/", tmpinvprint.deleteAll);
    
      app.use("/api/tmpinvprint", router);
    };
    