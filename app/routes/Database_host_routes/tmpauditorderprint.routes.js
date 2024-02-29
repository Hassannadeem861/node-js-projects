module.exports = (app) => {

    const tmpauditorderprint = require("../../controllers/Database_host_controller/tmpauditorderprint.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tmpauditorderprint
    router.post("/", tmpauditorderprint.create);

    // Retrieve all tmpauditorderprints
    router.get("/", tmpauditorderprint.findAll);

    // Retrieve a single tmpauditorderprint with id
    router.get("/:id", tmpauditorderprint.findOne);

    // Update a tmpauditorderprint with id
    router.put("/:id", tmpauditorderprint.update);

    // Delete a tmpauditorderprint with id
    router.delete("/:id", tmpauditorderprint.delete);

    // Delete all tmpauditorderprints
    router.delete("/", tmpauditorderprint.deleteAll);

    app.use("/api/tmpauditorderprint", router);

};
