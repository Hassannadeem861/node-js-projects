module.exports = (app) => {

    const tmppayout = require("../../controllers/Database_hoststockmaster_controller/tmppayout.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tmppayout
    router.post("/", tmppayout.create);

    // Retrieve all tmppayouts
    router.get("/", tmppayout.findAll);

    // Retrieve a single tmppayout with id
    router.get("/:id", tmppayout.findOne);

    // Update a tmppayout with id
    router.put("/:id", tmppayout.update);

    // Delete a tmppayout with id
    router.delete("/:id", tmppayout.delete);

    // Delete all tmppayouts
    router.delete("/", tmppayout.deleteAll);

    app.use("/api/tmppayout", router);

};
