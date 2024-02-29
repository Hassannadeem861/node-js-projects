module.exports = (app) => {
    const tmpquotedet = require("../../controllers/Database_host_controller/tmpquotedet.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
    
      // Create a new tmpquotedet
      router.post("/", tmpquotedet.create);
    
      // Retrieve all tmpquotedet
      router.get("/", tmpquotedet.findAll);
    
      // Retrieve all published tmpquotedet
      router.get("/published", tmpquotedet.findAllPublished);
    
      // Retrieve a single tmpquotedet with id
      router.get("/:id", tmpquotedet.findOne);
    
      // Update a tmpquotedet with id
      router.put("/:id", tmpquotedet.update);
    
      // Delete a tmpquotedet with id
      router.delete("/:id", tmpquotedet.delete);
    
      // Delete all tmpinvoicesearch
      router.delete("/", tmpquotedet.deleteAll);
    
      app.use("/api/tmpquotedet", router);
    };
    