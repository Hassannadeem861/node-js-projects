module.exports = (app) => {

    const tmpprodperf = require("../../controllers/Database_hoststockmaster_controller/tmpprodperf.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tmpprodperf
    router.post("/", tmpprodperf.create);

    // Retrieve all tmpprodperfs
    router.get("/", tmpprodperf.findAll);

    // Retrieve a single tmpprodperf with id
    router.get("/:id", tmpprodperf.findOne);

    // Update a tmpprodperf with id
    router.put("/:id", tmpprodperf.update);

    // Delete a tmpprodperf with id
    router.delete("/:id", tmpprodperf.delete);

    // Delete all tmpprodperfs
    router.delete("/", tmpprodperf.deleteAll);

    app.use("/api/tmpprodperf", router);

};
