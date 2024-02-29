module.exports = (app) => {

    const tbl_data_price = require("../../controllers/Database_hosthistory_controller/202308tbldata_price.controller");
    //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
      var router = require("express").Router();

    router.post('/', tbl_data_price.create);
    router.get('/', tbl_data_price.findAll);
    router.get('/:id', tbl_data_price.findOne);
    router.put('/:id', tbl_data_price.update);
    router.delete('/:id', tbl_data_price.delete);
    router.delete('/', tbl_data_price.deleteAll);
    
    app.use("/api/202308tbldata_price", router);
    
    };
    