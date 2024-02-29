module.exports = (app) => {

    const tb_ldataprice = require("../../controllers/Database_hosthistory_controller/202401tbldata_price.controller");
    //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
      var router = require("express").Router();
    
    // CRUD routes
    router.post('/', tb_ldataprice.create);
    router.get('/', tb_ldataprice.findAll);
    router.get('/:id', tb_ldataprice.findOne);
    router.put('/:id', tb_ldataprice.update);
    router.delete('/:id', tb_ldataprice.delete);
    router.delete('/', tb_ldataprice.deleteAll);
    
    app.use("/api/202401tbldata_price", router);
    
    };
    