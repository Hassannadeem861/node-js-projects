module.exports = (app) => {
// routes/202310tbldata_cashup_det.routes.js
const tbldata_cashup_det = require("../../controllers/Database_hosthistory_controller/202310tbldata_cashup_det.controller");
//  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
  var router = require("express").Router();

// Create a new tbldata_cashup_det
router.post("/", tbldata_cashup_det.create);

// Retrieve all tbldata_cashup_det
router.get("/", tbldata_cashup_det.findAll);

// Retrieve a single tbldata_cashup_det with id
router.get("/:id", tbldata_cashup_det.findOne);

// Update a tbldata_cashup_det with id
router.put("/:id", tbldata_cashup_det.update);

// Delete a tbldata_cashup_det with id
router.delete("/:id", tbldata_cashup_det.delete);

// Delete all tbldata_cashup_det
router.delete("/", tbldata_cashup_det.deleteAll);

app.use("/api/202310tbldata_cashup_det", router);


};