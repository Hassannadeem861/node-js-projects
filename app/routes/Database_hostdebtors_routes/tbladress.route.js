module.exports = (app) => {
    // const tutorials = require("../controllers/tutorial.controller.js");
    const Tbladress = require("../../controllers/Database_hostdebtors_controller/tbladress.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
  
  
    // Create a new Tutorial
    router.post("/save", Tbladress.create);
  
    // Retrieve all Tutorials
    router.get("/", Tbladress.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", Tbladress.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", Tbladress.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", Tbladress.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", Tbladress.delete);
  
    // Delete all Tutorials
    router.delete("/", Tbladress.deleteAll);
  
    app.use("/api/tbladress", router);
  };
  