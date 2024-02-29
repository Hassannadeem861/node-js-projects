// routes/202310tbldata_current_tran.routes.js

module.exports = app => {
    const tbldata_stockactivity = require("../../controllers/Database_hosthistory_controller/202306tbldata_stockactivity.controller");
    //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
      var router = require("express").Router();

    // Create a new tbldata_price
    router.post("/", tbldata_stockactivity.create);

    // Retrieve all tbldata_prices
    router.get("/", tbldata_stockactivity.findAll);

    // Retrieve a single tbldata_price with id
    router.get("/:id", tbldata_stockactivity.findOne);

    // Update a tbldata_price with id
    router.put("/:id", tbldata_stockactivity.update);

    // Delete a tbldata_price with id
    router.delete("/:id", tbldata_stockactivity.delete);

    // Delete all tbldata_prices
    router.delete("/", tbldata_stockactivity.deleteAll);

    app.use('/api/202310tbldata_stockactivity', router);
};
