// routes/202310tbldata_current_tran.routes.js

module.exports = app => {
    const tbldata_stock_activity = require("../../controllers/Database_hosthistory_controller/202312tbldata_stockactivity.controller");
  //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tbldata_price
    router.post("/", tbldata_stock_activity.create);

    // Retrieve all tbldata_prices
    router.get("/", tbldata_stock_activity.findAll);

    // Retrieve a single tbldata_price with id
    router.get("/:id", tbldata_stock_activity.findOne);

    // Update a tbldata_price with id
    router.put("/:id", tbldata_stock_activity.update);

    // Delete a tbldata_price with id
    router.delete("/:id", tbldata_stock_activity.delete);

    // Delete all tbldata_prices
    router.delete("/", tbldata_stock_activity.deleteAll);

    app.use('/api/202312tbldata_stockactivity', router);
};
