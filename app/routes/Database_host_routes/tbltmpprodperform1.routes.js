module.exports = (app) => {
    const tbltmpprodperform1 = require("../../controllers/Database_host_controller/tbltmpprodperform1.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tbltmpprodperform1
    router.post("/", tbltmpprodperform1.create);

    // Retrieve all tbltmpprodperform1
    router.get("/", tbltmpprodperform1.findAll);

    // Retrieve a single tbltmpprodperform1 with id
    router.get("/:id", tbltmpprodperform1.findOne);


    // Update a tbltmpprodperform1 with id
    router.put("/:id", tbltmpprodperform1.update);

    // Delete a tbltmpprodperform1 with id
    router.delete("/:id", tbltmpprodperform1.delete);

    // Delete all tbltmpprodperform1
    router.delete("/", tbltmpprodperform1.deleteAll);

    // // Retrieve all published tbltmpprodperform1
    // router.get("/published", tbltmpprodperform1.findAllPublished);



    app.use("/api/tbltmpprodperform1", router);
};
