module.exports = (app) => {
    // const tutorials = require("../controllers/tutorial.controller.js");
    const tbldebtor_tran = require("../../controllers/Database_hosthistory_controller/202306tbldebtor_tran.controller");
    const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
  
    // Create a new tbldebtor_tran
    router.post("/", tbldebtor_tran.create);
  
    // Retrieve all tbldebtor_tran
    router.get("/", tbldebtor_tran.findAll);
  
    // Retrieve all published tbldebtor_tran
    router.get("/published", tbldebtor_tran.findAllPublished);
  
    // Retrieve a single tbldebtor_tran with id
    router.get("/:id", tbldebtor_tran.findOne);
  
    // Update a tbldebtor_tran with id
    router.put("/:id", tbldebtor_tran.update);
  
    // Delete a tbldebtor_tran with id
    router.delete("/:id", tbldebtor_tran.delete);
  
    // Delete all tbldebtor_tran
    router.delete("/", tbldebtor_tran.deleteAll);
  
    app.use("/api/202306tbldebtor_tran", router);
  };
  