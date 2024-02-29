module.exports = (app) => {

    const tmpdailyinv = require("../../controllers/Database_hoststockmaster_controller/tmpdailyinv.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tmpdailyinv
    router.post("/", tmpdailyinv.create);

    // Retrieve all tmpdailyinvs
    router.get("/", tmpdailyinv.findAll);

    // Retrieve a single tmpdailyinv with id
    router.get("/:id", tmpdailyinv.findOne);

    // Update a tmpdailyinv with id
    router.put("/:id", tmpdailyinv.update);

    // Delete a tmpdailyinv with id
    router.delete("/:id", tmpdailyinv.delete);

    // Delete all tmpdailyinvs
    router.delete("/", tmpdailyinv.deleteAll);

    app.use("/api/tmpdailyinv", router);

};
