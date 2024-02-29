module.exports = (app) => {

    const tmpauditgrv = require("../../controllers/Database_hoststockmaster_controller/tmpauditgrv.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tmpauditgrv
    router.post("/", tmpauditgrv.create);

    // Retrieve all tmpauditgrvs
    router.get("/", tmpauditgrv.findAll);

    // Retrieve a single tmpauditgrv with id
    router.get("/:id", tmpauditgrv.findOne);

    // Update a tmpauditgrv with id
    router.put("/:id", tmpauditgrv.update);

    // Delete a tmpauditgrv with id
    router.delete("/:id", tmpauditgrv.delete);

    // Delete all tmpauditgrvs
    router.delete("/", tmpauditgrv.deleteAll);

    app.use("/api/tmpauditgrv", router);

};
