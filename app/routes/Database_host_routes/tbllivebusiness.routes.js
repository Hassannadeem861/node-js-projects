module.exports = (app) => {
  const tbllivebusiness = require("../../controllers/Database_host_controller/tbllivebusiness.controller");
  // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
  var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", tbllivebusiness.create);
  
    // Retrieve all tbllivebusiness
    router.get("/", tbllivebusiness.findAll);
  
    // Retrieve all published tbllivebusiness
    router.get("/published", tbllivebusiness.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tbllivebusiness.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tbllivebusiness.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tbllivebusiness.delete);
  
    // Delete all tbllivebusiness
    router.delete("/", tbllivebusiness.deleteAll);
  
    app.use("/api/tbllivebusiness", router);
  };
  