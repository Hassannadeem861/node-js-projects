

module.exports = app => {
    const tbldatastock_activity = require("../../controllers/Database_hosthistory_controller/202309tbldata_stockactivity.controller");
    //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
      var router = require("express").Router();

    // Create a new tbldatastock_activity
    router.post("/", tbldatastock_activity.create);

    // Retrieve all tbldatastock_activity
    router.get("/", tbldatastock_activity.findAll);

    // Retrieve a single tbldatastock_activity with id
    router.get("/:id", tbldatastock_activity.findOne);

    // Update a tbldatastock_activity with id
    router.put("/:id", tbldatastock_activity.update);

    // Delete a tbldatastock_activity with id
    router.delete("/:id", tbldatastock_activity.delete);

    // Delete all tbldatastock_activity
    router.delete("/", tbldatastock_activity.deleteAll);

    app.use('/api/202309tbldata_stockactivity', router);
};
