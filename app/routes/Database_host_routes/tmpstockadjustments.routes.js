module.exports = (app) => {
   
  const tmpstockadjustments = require("../../controllers/Database_host_controller/tmpstockadjustments.controller");
  // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
  var router = require("express").Router();
  
    // Create a new tmpstockadjustments
    router.post("/", tmpstockadjustments.create);
  
    // Retrieve all tmpstockadjustments
    router.get("/", tmpstockadjustments.findAll);
  
    // Retrieve all published tmpstockadjustments
    router.get("/published", tmpstockadjustments.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tmpstockadjustments.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tmpstockadjustments.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tmpstockadjustments.delete);
  
    // Delete all tmpstockadjustments
    router.delete("/", tmpstockadjustments.deleteAll);
  
    app.use("/api/tmpstockadjustments", router);
  };
  