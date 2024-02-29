module.exports = (app) => {
    const tmpmaindelete = require("../../controllers/Database_host_controller/tmpmaindelete.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
    
      // Create a new tmpmaindelete
      router.post("/", tmpmaindelete.create);
    
      // Retrieve all tmpmaindelete
      router.get("/", tmpmaindelete.findAll);
    
      // Retrieve all published tmpmaindelete
      router.get("/published", tmpmaindelete.findAllPublished);
    
      // Retrieve a single Tutorial with id
      router.get("/:id", tmpmaindelete.findOne);
    
      // Update a Tutorial with id
      router.put("/:id", tmpmaindelete.update);
    
      // Delete a Tutorial with id
      router.delete("/:id", tmpmaindelete.delete);
    
      // Delete all tmpinvoicesearch
      router.delete("/", tmpmaindelete.deleteAll);
    
      app.use("/api/tmpmaindelete", router);
    };
    