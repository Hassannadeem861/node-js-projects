  
  
module.exports = (app) => {
  const tbldatasalesserialitems = require("../../controllers/Database_hosthistory_controller/tbldatasalesserialitems.controller");
  //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
    var router = require("express").Router();
  
    // Create a new tbldatasalesserialitems
    router.post("/", tbldatasalesserialitems.create);
  
    // Retrieve all tbldatasalesserialitems
    router.get("/", tbldatasalesserialitems.findAll);
  
    // Retrieve all published tbldatasalesserialitems
    router.get("/published", tbldatasalesserialitems.findAllPublished);
  
    // Retrieve a single tbldatasalesserialitems with id
    router.get("/:id", tbldatasalesserialitems.findOne);
  
    // Update a tbldatasalesserialitems with id
    router.put("/:id", tbldatasalesserialitems.update);
  
    // Delete a tbldatasalesserialitems with id
    router.delete("/:id", tbldatasalesserialitems.delete);
  
    // Delete all tbldatasalesserialitems
    router.delete("/", tbldatasalesserialitems.deleteAll);
  
    app.use("/api/tbldatasalesserialitems", router);
  };
  