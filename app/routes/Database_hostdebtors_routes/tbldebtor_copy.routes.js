module.exports = (app) => {
  const tbldebtor_copy = require("../../controllers/Database_hostdebtors_controller/tbldebtor_copy.controller");
  // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
  var router = require("express").Router();

  
    // Create a new Tutorial
    router.post("/", tbldebtor_copy.create);
  
    // Retrieve all tbldebtor_copy
    router.get("/", tbldebtor_copy.findAll);
  
    // Retrieve all published tbldebtor_copy
    router.get("/published", tbldebtor_copy.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tbldebtor_copy.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tbldebtor_copy.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tbldebtor_copy.delete);
  
    // Delete all tbldebtor_copy
    router.delete("/", tbldebtor_copy.deleteAll);
  
    app.use("/api/tbldebtor_copy", router);
  };
  