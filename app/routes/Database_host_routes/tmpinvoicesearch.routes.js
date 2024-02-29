module.exports = (app) => {
    const tmpinvoicesearch = require("../../controllers/Database_host_controller/tmpinvoicesearch.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
    
      // Create a new tmpinvoicesearch
      router.post("/", tmpinvoicesearch.create);
    
      // Retrieve all tmpinvoicesearch
      router.get("/", tmpinvoicesearch.findAll);
    
      // Retrieve all published tmpinvoicesearch
      router.get("/published", tmpinvoicesearch.findAllPublished);
    
      // Retrieve a single Tutorial with id
      router.get("/:id", tmpinvoicesearch.findOne);
    
      // Update a Tutorial with id
      router.put("/:id", tmpinvoicesearch.update);
    
      // Delete a Tutorial with id
      router.delete("/:id", tmpinvoicesearch.delete);
    
      // Delete all tmpinvoicesearch
      router.delete("/", tmpinvoicesearch.deleteAll);
    
      app.use("/api/tmpinvoicesearch", router);
    };
    