module.exports = (app) => {
  const tbldatadebtor_tran = require("../../controllers/Database_hosthistory_controller/tbldatadebtor_tran.controller");
  //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
    var router = require("express").Router();
  
    // Create a new tbldatadebtor_tran
    router.post("/", tbldatadebtor_tran.create);
  
    // Retrieve all tbldatadebtor_tran
    router.get("/", tbldatadebtor_tran.findAll);
  
    // Retrieve all published tbldatadebtor_tran
    router.get("/published", tbldatadebtor_tran.findAllPublished);
  
    // Retrieve a single tbldatadebtor_tran with id
    router.get("/:id", tbldatadebtor_tran.findOne);
  
    // Update a tbldatadebtor_tran with id
    router.put("/:id", tbldatadebtor_tran.update);
  
    // Delete a tbldatadebtor_tran with id
    router.delete("/:id", tbldatadebtor_tran.delete);
  
    // Delete all tbldatadebtor_tran
    router.delete("/", tbldatadebtor_tran.deleteAll);
  
    app.use("/api/tbldatadebtor_tran", router);
  };
  