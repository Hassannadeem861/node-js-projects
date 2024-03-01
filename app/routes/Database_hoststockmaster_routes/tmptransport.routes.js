module.exports = (app) => {

    const tmptransport = require("../../controllers/Database_hoststockmaster_controller/tmptransport.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tmptransport
    router.post("/", tmptransport.create);

    // Retrieve all tmptransports
    router.get("/", tmptransport.findAll);

    // Retrieve a single tmptransport with id
    router.get("/:id", tmptransport.findOne);

    // Update a tmptransport with id
    router.put("/:id", tmptransport.update);

    // Delete a tmptransport with id
    router.delete("/:id", tmptransport.delete);

    // Delete all tmptransports
    router.delete("/", tmptransport.deleteAll);

    app.use("/api/tmptransport", router);

};
