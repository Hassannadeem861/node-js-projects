module.exports = (app) => {
  const tbllaybyefootermsg = require("../../controllers/Database_host_controller/tbllaybyefootermsg.controller");
  // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
  var router = require("express").Router();
  
    // Create a new tbllaybyefootermsg
    router.post("/", tbllaybyefootermsg.create);
  
    // Retrieve all tbllaybyefootermsg
    router.get("/", tbllaybyefootermsg.findAll);
  
    // Retrieve all published tbllaybyefootermsg
    router.get("/published", tbllaybyefootermsg.findAllPublished);
  
    // Retrieve a single tbllaybyefootermsg with id
    router.get("/:id", tbllaybyefootermsg.findOne);
  
    // Update a tbllaybyefootermsg with id
    router.put("/:id", tbllaybyefootermsg.update);
  
    // Delete a tbllaybyefootermsg with id
    router.delete("/:id", tbllaybyefootermsg.delete);
  
    // Delete all tbllaybyefootermsg
    router.delete("/", tbllaybyefootermsg.deleteAll);
  
    app.use("/api/tbllaybyefootermsg", router);
  };
  