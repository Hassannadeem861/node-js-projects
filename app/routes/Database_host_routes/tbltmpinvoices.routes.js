module.exports = (app) => {
    const tbltmpinvoices = require("../../controllers/Database_host_controller/tbltmpinvoices.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();


    // Create a new tbltmpinvoices
    router.post("/", tbltmpinvoices.create);

    // Retrieve all tbltmpinvoices
    router.get("/", tbltmpinvoices.findAll);

    // Retrieve all published tbltmpinvoices
    router.get("/published", tbltmpinvoices.findAllPublished);

    // Retrieve a single tbltmpinvoices with id
    router.get("/:id", tbltmpinvoices.findOne);

    // Update a tbltmpinvoices with id
    router.put("/:id", tbltmpinvoices.update);

    // Delete a tbltmpinvoices with id
    router.delete("/:id", tbltmpinvoices.delete);

    // Delete all tbltmpinvoices
    router.delete("/", tbltmpinvoices.deleteAll);

    app.use("/api/tbltmpinvoices", router);
};
