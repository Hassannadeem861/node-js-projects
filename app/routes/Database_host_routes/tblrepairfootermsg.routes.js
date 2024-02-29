module.exports = (app) => {
  const tblrepairfootermsg = require("../../controllers/Database_host_controller/tblrepairfootermsg.controller");
  // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
  var router = require("express").Router();
  
    // Create a new tblrepairfootermsg
    router.post("/", tblrepairfootermsg.create);
  
    // Retrieve all tblrepairfootermsg
    router.get("/", tblrepairfootermsg.findAll);
  
    // Retrieve all published tblrepairfootermsg
    router.get("/published", tblrepairfootermsg.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tblrepairfootermsg.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tblrepairfootermsg.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tblrepairfootermsg.delete);
  
    // Delete all tblrepairfootermsg
    router.delete("/", tblrepairfootermsg.deleteAll);
  
    app.use("/api/tblrepairfootermsg", router);
  };
  