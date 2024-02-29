module.exports = (app) => {

    const tbldata_price = require("../../controllers/Database_hosthistory_controller/202310tbldata_price.controller");
  //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
    var router = require("express").Router();

// CRUD routes
router.post('/', tbldata_price.create);
router.get('/', tbldata_price.findAll);
router.get('/:id', tbldata_price.findOne);
router.put('/:id', tbldata_price.update);
router.delete('/:id', tbldata_price.delete);
router.delete('/', tbldata_price.deleteAll);

app.use("/api/202310tbldata_price", router);

};
