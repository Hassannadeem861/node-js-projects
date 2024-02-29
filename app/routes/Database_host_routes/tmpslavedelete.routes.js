module.exports = (app) => {
   
  const tmpslavedelete = require("../../controllers/Database_host_controller/tmpslavedelete.controller");
  // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
  var router = require("express").Router();
  
    // Create a new tmpslavedelete
    router.post("/", tmpslavedelete.create);
  
    // Retrieve all tmpslavedelete
    router.get("/", tmpslavedelete.findAll);
  
    // Retrieve all published tmpslavedelete
    router.get("/published", tmpslavedelete.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tmpslavedelete.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tmpslavedelete.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tmpslavedelete.delete);
  
    // Delete all tmpslavedelete
    router.delete("/", tmpslavedelete.deleteAll);
  
    app.use("/api/tmpslavedelete", router);
  };
  