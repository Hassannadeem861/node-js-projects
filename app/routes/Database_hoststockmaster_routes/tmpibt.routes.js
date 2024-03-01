module.exports = (app) => {

    const tmpibt = require("../../controllers/Database_hoststockmaster_controller/tmpibt.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tmpibt
    router.post("/", tmpibt.create);

    // Retrieve all tmpibts
    router.get("/", tmpibt.findAll);

    // Retrieve a single tmpibt with id
    router.get("/:id", tmpibt.findOne);

    // Update a tmpibt with id
    router.put("/:id", tmpibt.update);

    // Delete a tmpibt with id
    router.delete("/:id", tmpibt.delete);

    // Delete all tmpibts
    router.delete("/", tmpibt.deleteAll);

    app.use("/api/tmpibt", router);

};
