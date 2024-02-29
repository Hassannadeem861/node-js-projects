// routes/202310tbldata_current_tran.routes.js

module.exports = app => {
    const tbl_data_stock_activity = require("../../controllers/Database_hosthistory_controller/202401tbldata_stockactivity.controller");
    //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
      var router = require("express").Router();

    // Create a new tbl_data_stock_activity
    router.post("/", tbl_data_stock_activity.create);

    // Retrieve all tbl_data_stock_activity
    router.get("/", tbl_data_stock_activity.findAll);

    // Retrieve a single tbl_data_stock_activity with id
    router.get("/:id", tbl_data_stock_activity.findOne);

    // Update a tbl_data_stock_activity with id
    router.put("/:id", tbl_data_stock_activity.update);

    // Delete a tbl_data_stock_activity with id
    router.delete("/:id", tbl_data_stock_activity.delete);

    // Delete all tbl_data_stock_activity
    router.delete("/", tbl_data_stock_activity.deleteAll);

    app.use('/api/202401tbldata_stockactivity', router);
};
