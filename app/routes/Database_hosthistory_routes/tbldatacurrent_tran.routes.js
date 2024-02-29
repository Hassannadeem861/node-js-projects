module.exports = (app) => {
  const tbldatacurrent_tran = require("../../controllers/Database_hosthistory_controller/tbldatacurrent_tran.controller");
  //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
    var router = require("express").Router();
  
    // Create a new tbldatacurrent_tran
    router.post("/", tbldatacurrent_tran.create);
  
    // Retrieve all tbldatacurrent_tran
    router.get("/", tbldatacurrent_tran.findAll);
  
    // Retrieve all published tbldatacurrent_tran
    router.get("/published", tbldatacurrent_tran.findAllPublished);
  
    // Retrieve a single tbldatacurrent_tran with id
    router.get("/:id", tbldatacurrent_tran.findOne);
  
    // Update a tbldatacurrent_tran with id
    router.put("/:id", tbldatacurrent_tran.update);
  
    // Delete a tbldatacurrent_tran with id
    router.delete("/:id", tbldatacurrent_tran.delete);
  
    // Delete all tbldatacurrent_tran
    router.delete("/", tbldatacurrent_tran.deleteAll);
  
    app.use("/api/tbldatacurrent_tran", router);
  };
  