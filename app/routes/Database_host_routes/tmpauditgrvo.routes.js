module.exports = (app) => {

    const tmpauditgrvo = require("../../controllers/Database_host_controller/tmpauditgrvo.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tmpauditgrvo
    router.post("/", tmpauditgrvo.create);

    // Retrieve all tmpauditgrvos
    router.get("/", tmpauditgrvo.findAll);

    // Retrieve a single tmpauditgrvo with id
    router.get("/:id", tmpauditgrvo.findOne);

    // Update a tmpauditgrvo with id
    router.put("/:id", tmpauditgrvo.update);

    // Delete a tmpauditgrvo with id
    router.delete("/:id", tmpauditgrvo.delete);

    // Delete all tmpauditgrvos
    router.delete("/", tmpauditgrvo.deleteAll);

    app.use("/api/tmpauditgrvo", router);

};
