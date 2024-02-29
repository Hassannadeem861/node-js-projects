module.exports = app => {
  const tbldata_grn_det = require("../../controllers/Database_hosthistory_controller/202309tbldata_grn_det.controller");
  //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
    var router = require("express").Router();
  
    // Create a new tbldata_grn_det
    router.post("/", tbldata_grn_det.create);
  
    // Retrieve all tbldata_grn_dets
    router.get("/", tbldata_grn_det.findAll);
  
    // Retrieve a single tbldata_grn_det with id
    router.get("/:id", tbldata_grn_det.findOne);
  
    // Update a tbldata_grn_det with id
    router.put("/:id", tbldata_grn_det.update);
  
    // Delete a tbldata_grn_det with id
    router.delete("/:id", tbldata_grn_det.delete);
  
    // Delete all tbldata_grn_dets
    router.delete("/", tbldata_grn_det.deleteAll);
  
    app.use('/api/202309tbldata_grn_det', router);
  };
  