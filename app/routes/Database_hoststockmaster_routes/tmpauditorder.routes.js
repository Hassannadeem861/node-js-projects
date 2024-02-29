module.exports = (app) => {

    const tmpauditorder = require("../../controllers/Database_hoststockmaster_controller/tmpauditorder.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tmpauditorder
    router.post("/", tmpauditorder.create);

    // Retrieve all tmpauditorders
    router.get("/", tmpauditorder.findAll);

    // Retrieve a single tmpauditorder with id
    router.get("/:id", tmpauditorder.findOne);

    // Update a tmpauditorder with id
    router.put("/:id", tmpauditorder.update);

    // Delete a tmpauditorder with id
    router.delete("/:id", tmpauditorder.delete);

    // Delete all tmpauditorders
    router.delete("/", tmpauditorder.deleteAll);

    app.use("/api/tmpauditorder", router);

};
