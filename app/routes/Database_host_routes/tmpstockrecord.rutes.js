module.exports = (app) => {
   
  const tmpstockrecord = require("../../controllers/Database_host_controller/tmpstockrecord.controller");
  // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
  var router = require("express").Router();
  
    // Create a new tmpstockrecord
    router.post("/", tmpstockrecord.create);
  
    // Retrieve all tmpstockrecord
    router.get("/", tmpstockrecord.findAll);
  
    // Retrieve all published tmpstockrecord
    router.get("/published", tmpstockrecord.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tmpstockrecord.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tmpstockrecord.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tmpstockrecord.delete);
  
    // Delete all tmpstockrecord
    router.delete("/", tmpstockrecord.deleteAll);
  
    app.use("/api/tmpstockrecord", router);
  };
  