module.exports = (app) => {
// routes/tbldata_cashup.routes.js
const tbldata_cashup = require("../../controllers/Database_hosthistory_controller/202310tbldata_cashup.controller");
//  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
  var router = require("express").Router();

// Create a new tbldata_cashup
router.post('/', tbldata_cashup.create);

// Retrieve all tbldata_cashup
router.get('/', tbldata_cashup.findAll);

// Retrieve a single tbldata_cashup by id
router.get('/:id', tbldata_cashup.findOne);

// Update a tbldata_cashup by id
router.put('/:id', tbldata_cashup.update);

// Delete a tbldata_cashup by id
router.delete('/:id', tbldata_cashup.delete);

router.delete('/', tbldata_cashup.deleteAll);

app.use("/api/202310tbldata_cashup", router);


};
