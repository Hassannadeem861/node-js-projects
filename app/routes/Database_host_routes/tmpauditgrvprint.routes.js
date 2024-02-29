module.exports = (app) => {

    const tmpauditgrvprint = require("../../controllers/Database_host_controller/tmpauditgrvprint.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tmpauditgrvprint
    router.post("/", tmpauditgrvprint.create);

    // Retrieve all tmpauditgrvprints
    router.get("/", tmpauditgrvprint.findAll);

    // Retrieve a single tmpauditgrvprint with id
    router.get("/:id", tmpauditgrvprint.findOne);

    // Update a tmpauditgrvprint with id
    router.put("/:id", tmpauditgrvprint.update);

    // Delete a tmpauditgrvprint with id
    router.delete("/:id", tmpauditgrvprint.delete);

    // Delete all tmpauditgrvprints
    router.delete("/", tmpauditgrvprint.deleteAll);

    app.use("/api/tmpauditgrvprint", router);

};
