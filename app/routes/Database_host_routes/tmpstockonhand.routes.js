module.exports = (app) => {
   
  const tmpstockonhand = require("../../controllers/Database_host_controller/tmpstockonhand.controller");
  // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
  var router = require("express").Router();
  
    // Create a new tmpstockonhand
    router.post("/", tmpstockonhand.create);
  
    // Retrieve all tmpstockonhand
    router.get("/", tmpstockonhand.findAll);
  
    // Retrieve all published tmpstockonhand
    router.get("/published", tmpstockonhand.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tmpstockonhand.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tmpstockonhand.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tmpstockonhand.delete);
  
    // Delete all tmpstockonhand
    router.delete("/", tmpstockonhand.deleteAll);
  
    app.use("/api/tmpstockonhand", router);
  };
  