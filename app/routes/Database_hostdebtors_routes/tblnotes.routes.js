module.exports = (app) => {
  const tblnotes = require("../../controllers/Database_hostdebtors_controller/tblnotes.controller");
  // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
  var router = require("express").Router();

  
    // Create a new tblnotes
    router.post("/", tblnotes.create);
  
    // Retrieve all tblnotes
    router.get("/", tblnotes.findAll);
  
    // Retrieve all published tblnotes
    router.get("/published", tblnotes.findAllPublished);
  
    // Retrieve a single tblnotes with id
    router.get("/:id", tblnotes.findOne);
  
    // Update a tblnotes with id
    router.put("/:id", tblnotes.update);
  
    // Delete a tblnotes with id
    router.delete("/:id", tblnotes.delete);
  
    // Delete all tblnotes
    router.delete("/", tblnotes.deleteAll);
  
    app.use("/api/tblnotes", router);
  };
  