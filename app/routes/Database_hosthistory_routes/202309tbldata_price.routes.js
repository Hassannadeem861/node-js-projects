module.exports = (app) => {
    const tbl_dataprice = require("../../controllers/Database_hosthistory_controller/202309tbldata_price.controller");
  //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
    var router = require("express").Router();
    
    // CRUD routes
    router.post('/', tbl_dataprice.create);
    router.get('/', tbl_dataprice.findAll);
    router.get('/:id', tbl_dataprice.findOne);
    router.put('/:id', tbl_dataprice.update);
    router.delete('/:id', tbl_dataprice.delete);
    router.delete('/', tbl_dataprice.deleteAll);
    
    app.use("/api/202309tbldata_price", router);
    
    };
    