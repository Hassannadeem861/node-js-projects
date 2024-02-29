module.exports = (app) => {

    const tbldataprice = require("../../controllers/Database_hosthistory_controller/202312tbldata_price.controller");
  //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
    var router = require("express").Router();
    
    // CRUD routes
    router.post('/', tbldataprice.create);
    router.get('/', tbldataprice.findAll);
    router.get('/:id', tbldataprice.findOne);
    router.put('/:id', tbldataprice.update);
    router.delete('/:id', tbldataprice.delete);
    router.delete('/', tbldataprice.deleteAll);
    
    app.use("/api/202312tbldata_price", router);
    
    };
    