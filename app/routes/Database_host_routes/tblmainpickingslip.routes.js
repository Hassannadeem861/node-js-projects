module.exports = (app) => {
    const tblmainpickingslip = require("../../controllers/Database_host_controller/tblmainpickingslip.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
  
    // Create a new tblmainpickingslip
    router.post("/", tblmainpickingslip.create);
  
    // Retrieve all tblmainpickingslips
    router.get("/", tblmainpickingslip.findAll);
  
    // Retrieve all published tblmainpickingslips
    router.get("/published", tblmainpickingslip.findAllPublished);
  
    // Retrieve a single tblmainpickingslip with id
    router.get("/:id", tblmainpickingslip.findOne);
  
    // Update a tblmainpickingslip with id
    router.put("/:id", tblmainpickingslip.update);
  
    // Delete a tblmainpickingslip with id
    router.delete("/:id", tblmainpickingslip.delete);
  
    // Delete all tblmainpickingslips
    router.delete("/", tblmainpickingslip.deleteAll);
  
    app.use("/api/tblmainpickingslip", router);
};
