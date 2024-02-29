module.exports = (app) => {
    // const tutorials = require("../controllers/tutorial.controller.js");
    const tbldataprice = require("../../controllers/Database_hosthistory_controller/tbldataprice.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
  
    // Create a new tbldataprice
    router.post("/", tbldataprice.create);
  
    // Retrieve all tbldataprice
    router.get("/", tbldataprice.findAll);
  
    // Retrieve all published tbldataprice
    router.get("/published", tbldataprice.findAllPublished);
  
    // Retrieve a single tbldataprice with id
    router.get("/:id", tbldataprice.findOne);
  
    // Update a tbldataprice with id
    router.put("/:id", tbldataprice.update);
  
    // Delete a tbldataprice with id
    router.delete("/:id", tbldataprice.delete);
  
    // Delete all tbldataprice
    router.delete("/", tbldataprice.deleteAll);
  
    app.use("/api/tbldataprice", router);
  };
  