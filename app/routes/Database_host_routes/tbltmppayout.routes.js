module.exports = (app) => {
    const tbltmppayout = require("../../controllers/Database_host_controller/tbltmppayout.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();


    // Create a new tbltmppayout
    router.post("/", tbltmppayout.create);

    // Retrieve all tbltmppayout
    router.get("/", tbltmppayout.findAll);

    // Retrieve all published tbltmppayout
    router.get("/published", tbltmppayout.findAllPublished);

    // Retrieve a single tbltmppayout with id
    router.get("/:id", tbltmppayout.findOne);

    // Update a tbltmppayout with id
    router.put("/:id", tbltmppayout.update);

    // Delete a tbltmppayout with id
    router.delete("/:id", tbltmppayout.delete);

    // Delete all tbltmppayout
    router.delete("/", tbltmppayout.deleteAll);

    app.use("/api/tbltmppayout", router);
};
