module.exports = (app) => {
  const tblgrvcombined = require("../../controllers/Database_host_controller/tblgrvcombined.controller");
  // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
  var router = require("express").Router();
  
    // Create a new tblgrvcombined
    router.post("/", tblgrvcombined.create);
  
    // Retrieve all tblgrvcombined
    router.get("/", tblgrvcombined.findAll);
  
    // Retrieve all published tblgrvcombined
    router.get("/published", tblgrvcombined.findAllPublished);
  
    // Retrieve a single tblgrvcombined with id
    router.get("/:id", tblgrvcombined.findOne);
  
    // Update a tblgrvcombined with id
    router.put("/:id", tblgrvcombined.update);
  
    // Delete a tblgrvcombined with id
    router.delete("/:id", tblgrvcombined.delete);
  
    // Delete all tblgrvcombined
    router.delete("/", tblgrvcombined.deleteAll);
  
    app.use("/api/tblgrvcombined", router);
  };
  