module.exports = (app) => {
   
  const tmpserialsale = require("../../controllers/Database_host_controller/tmpserialsale.controller");
  // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
  var router = require("express").Router();
  
    // Create a new tmpserialsale
    router.post("/", tmpserialsale.create);
  
    // Retrieve all tmpserialsale
    router.get("/", tmpserialsale.findAll);
  
    // Retrieve all published tmpserialsale
    router.get("/published", tmpserialsale.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tmpserialsale.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tmpserialsale.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tmpserialsale.delete);
  
    // Delete all tmpserialsale
    router.delete("/", tmpserialsale.deleteAll);
  
    app.use("/api/tmpserialsale", router);
  };
  