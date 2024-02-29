module.exports = (app) => {
    // const tutorials = require("../controllers/tutorial.controller.js");
    const Tbldebtorsorials = require("../../controllers/Database_hostdebtors_controller/tbldebtors_controllers");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
  
  
    // Create a new Tutorial
    router.post("/", Tbldebtorsorials.create);
  
    // Retrieve all Tutorials
    router.get("/", Tbldebtorsorials.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", Tbldebtorsorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", Tbldebtorsorials.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", Tbldebtorsorials.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", Tbldebtorsorials.delete);
  
    // Delete all Tutorials
    router.delete("/", Tbldebtorsorials.deleteAll);
  
    app.use("/api/tbldebtorsorials", router);
  };
  