module.exports = (app) => {
  const tblquotefootermsg = require("../../controllers/Database_host_controller/tblquotefootermsg.controller");
  // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
  var router = require("express").Router();
  
    // Create a new tblquotefootermsg
    router.post("/", tblquotefootermsg.create);
  
    // Retrieve all tblquotefootermsg
    router.get("/", tblquotefootermsg.findAll);
  
    // Retrieve all published tblquotefootermsg
    router.get("/published", tblquotefootermsg.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tblquotefootermsg.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tblquotefootermsg.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tblquotefootermsg.delete);
  
    // Delete all tblquotefootermsg
    router.delete("/", tblquotefootermsg.deleteAll);
  
    app.use("/api/tblquotefootermsg", router);
  };
  