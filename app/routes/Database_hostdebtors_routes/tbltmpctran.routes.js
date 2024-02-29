module.exports = (app) => {
  const tbltmpctrans = require("../../controllers/Database_hostdebtors_controller/tbltmpctran.controller");
  // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
  var router = require("express").Router();

  
    // Create a new tbltmpctrans
    router.post("/", tbltmpctrans.create);
  
    // Retrieve all tbltmpctrans
    router.get("/", tbltmpctrans.findAll);
  
    // Retrieve all published tbltmpctrans
    router.get("/published", tbltmpctrans.findAllPublished);
  
    // Retrieve a single tbltmpctrans with id
    router.get("/:id", tbltmpctrans.findOne);
  
    // Update a tbltmpctrans with id
    router.put("/:id", tbltmpctrans.update);
  
    // Delete a tbltmpctrans with id
    router.delete("/:id", tbltmpctrans.delete);
  
    // Delete all tbltmpctrans
    router.delete("/", tbltmpctrans.deleteAll);
  
    app.use("/api/tbltmpctrans", router);
  };
  