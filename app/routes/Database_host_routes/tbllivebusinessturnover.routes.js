module.exports = (app) => {
  const tbllivebusinessturnover = require("../../controllers/Database_host_controller/tbllivebusinessturnover.controller");
  // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
  var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", tbllivebusinessturnover.create);
  
    // Retrieve all tbllivebusinessturnover
    router.get("/", tbllivebusinessturnover.findAll);
  
    // Retrieve all published tbllivebusinessturnover
    router.get("/published", tbllivebusinessturnover.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tbllivebusinessturnover.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tbllivebusinessturnover.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tbllivebusinessturnover.delete);
  
    // Delete all tbllivebusinessturnover
    router.delete("/", tbllivebusinessturnover.deleteAll);
  
    app.use("/api/tbllivebusinessturnover", router);
  };
  