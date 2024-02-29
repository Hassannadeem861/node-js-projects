module.exports = (app) => {
    // const tutorials = require("../controllers/tutorial.controller.js");
    const tbldata_cash_up_det = require("../../controllers/Database_hosthistory_controller/202307tbldata_cashup_det.controller");
    //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tbldata_cash_up_det
    router.post("/", tbldata_cash_up_det.create);

    // Retrieve all tbldata_cash_up_det
    router.get("/", tbldata_cash_up_det.findAll);

    // Retrieve all published tbldata_cash_up_det
    router.get("/published", tbldata_cash_up_det.findAllPublished);

    // Retrieve a single tbldata_cash_up_det with id
    router.get("/:id", tbldata_cash_up_det.findOne);

    // Update a tbldata_cash_up_det with id
    router.put("/:id", tbldata_cash_up_det.update);

    // Delete a tbldata_cash_up_det with id
    router.delete("/:id", tbldata_cash_up_det.delete);

    // Delete all tbldata_cash_up_det
    router.delete("/", tbldata_cash_up_det.deleteAll);

    app.use("/api/202307tbldata_cashup_det", router);
};
