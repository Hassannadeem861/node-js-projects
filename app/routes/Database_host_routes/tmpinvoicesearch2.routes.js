module.exports = (app) => {
    const tmpinvoicesearch2 = require("../../controllers/Database_host_controller/tmpinvoicesearch2.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
    
      // Create a new tmpinvoicesearch2
      router.post("/", tmpinvoicesearch2.create);
    
      // Retrieve all tmpinvoicesearch2
      router.get("/", tmpinvoicesearch2.findAll);
    
      // Retrieve all published tmpinvoicesearch2
      router.get("/published", tmpinvoicesearch2.findAllPublished);
    
      // Retrieve a single Tutorial with id
      router.get("/:id", tmpinvoicesearch2.findOne);
    
      // Update a Tutorial with id
      router.put("/:id", tmpinvoicesearch2.update);
    
      // Delete a Tutorial with id
      router.delete("/:id", tmpinvoicesearch2.delete);
    
      // Delete all tmpinvoicesearch
      router.delete("/", tmpinvoicesearch2.deleteAll);
    
      app.use("/api/tmpinvoicesearch2", router);
    };
    