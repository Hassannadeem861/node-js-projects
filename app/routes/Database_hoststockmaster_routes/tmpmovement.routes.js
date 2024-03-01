module.exports = (app) => {

    const tmpmovement = require("../../controllers/Database_hoststockmaster_controller/tmpmovement.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tmpmovement
    router.post("/", tmpmovement.create);

    // Retrieve all tmpmovements
    router.get("/", tmpmovement.findAll);

    // Retrieve a single tmpmovement with id
    router.get("/:id", tmpmovement.findOne);

    // Update a tmpmovement with id
    router.put("/:id", tmpmovement.update);

    // Delete a tmpmovement with id
    router.delete("/:id", tmpmovement.delete);

    // Delete all tmpmovements
    router.delete("/", tmpmovement.deleteAll);

    app.use("/api/tmpmovement", router);

};
