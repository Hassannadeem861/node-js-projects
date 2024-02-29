module.exports = (app) => {
    const tbltmpprodperform = require("../../controllers/Database_host_controller/tbltmpprodperform.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tbltmpprodperform
    router.post("/", tbltmpprodperform.create);

    // Retrieve all tbltmpprodperform
    router.get("/", tbltmpprodperform.findAll);

    // Retrieve a single tbltmpprodperform with id
    router.get("/:id", tbltmpprodperform.findOne);


    // Update a tbltmpprodperform with id
    router.put("/:id", tbltmpprodperform.update);

    // Delete a tbltmpprodperform with id
    router.delete("/:id", tbltmpprodperform.delete);

    // Delete all tbltmpprodperform
    router.delete("/", tbltmpprodperform.deleteAll);

    // // Retrieve all published tbltmpprodperform
    // router.get("/published", tbltmpprodperform.findAllPublished);



    app.use("/api/tbltmpprodperform", router);
};
