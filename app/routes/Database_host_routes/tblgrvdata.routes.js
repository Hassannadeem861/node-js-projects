module.exports = (app) => {
  const tblgrvdata = require("../../controllers/Database_host_controller/tblgrvdata.controller");
  // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
  var router = require("express").Router();
  
    // Create a new tblgrvdata
    router.post("/", tblgrvdata.create);
  
    // Retrieve all tblgrvdata
    router.get("/", tblgrvdata.findAll);
  
    // Retrieve all published tblgrvdata
    router.get("/published", tblgrvdata.findAllPublished);
  
    // Retrieve a single tblgrvdata with id
    router.get("/:id", tblgrvdata.findOne);
  
    // Update a tblgrvdata with id
    router.put("/:id", tblgrvdata.update);
  
    // Delete a tblgrvcombined with id
    router.delete("/:id", tblgrvdata.delete);
  
    // Delete all tblgrvdata
    router.delete("/", tblgrvdata.deleteAll);
  
    app.use("/api/tblgrvdata", router);
  };
  