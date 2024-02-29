// routes/202310tbldata_current_tran.routes.js

module.exports = app => {
    const tbldatastockactivity = require("../../controllers/Database_hosthistory_controller/202308tbldata_stockactivity.controller");
  //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tbldata_price
    router.post("/", tbldatastockactivity.create);

    // Retrieve all tbldata_prices
    router.get("/", tbldatastockactivity.findAll);

    // Retrieve a single tbldata_price with id
    router.get("/:id", tbldatastockactivity.findOne);

    // Update a tbldata_price with id
    router.put("/:id", tbldatastockactivity.update);

    // Delete a tbldata_price with id
    router.delete("/:id", tbldatastockactivity.delete);

    // Delete all tbldata_prices
    router.delete("/", tbldatastockactivity.deleteAll);

    app.use('/api/202308tbldata_stockactivity', router);
};
