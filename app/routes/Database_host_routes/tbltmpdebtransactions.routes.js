module.exports = (app) => {
    const tbltmpdebtransactions = require("../../controllers/Database_host_controller/tbltmpdebtransactions.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();


    // Create a new tbltmpdebtransactions
    router.post("/", tbltmpdebtransactions.create);

    // Retrieve all tbltmpdebtransactions
    router.get("/", tbltmpdebtransactions.findAll);

    // Retrieve all published tbltmpdebtransactions
    router.get("/published", tbltmpdebtransactions.findAllPublished);

    // Retrieve a single tbltmpdebtransactions with id
    router.get("/:id", tbltmpdebtransactions.findOne);

    // Update a tbltmpdebtransactions with id
    router.put("/:id", tbltmpdebtransactions.update);

    // Delete a tbltmpdebtransactions with id
    router.delete("/:id", tbltmpdebtransactions.delete);

    // Delete all tbltmpdebtransactions
    router.delete("/", tbltmpdebtransactions.deleteAll);

    app.use("/api/tbltmpdebtransactions", router);
};
