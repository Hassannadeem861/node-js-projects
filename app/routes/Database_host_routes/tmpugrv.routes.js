module.exports = (app) => {
   
  const tmpugrv = require("../../controllers/Database_host_controller/tmpugrv.controller");
  // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
  var router = require("express").Router();
  
    // Create a new tmpugrv
    router.post("/", tmpugrv.create);
  
    // Retrieve all tmpugrv
    router.get("/", tmpugrv.findAll);
  
    // Retrieve all published tmpugrv
    router.get("/published", tmpugrv.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tmpugrv.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tmpugrv.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tmpugrv.delete);
  
    // Delete all tmpugrv
    router.delete("/", tmpugrv.deleteAll);
  
    app.use("/api/tmpugrv", router);
  };
  