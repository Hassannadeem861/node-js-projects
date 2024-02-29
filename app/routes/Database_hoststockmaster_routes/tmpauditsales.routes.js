module.exports = (app) => {

    const tmpauditsales = require("../../controllers/Database_hoststockmaster_controller/tmpauditsales.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tmpauditsales
    router.post("/", tmpauditsales.create);

    // Retrieve all tmpauditsaless
    router.get("/", tmpauditsales.findAll);

    // Retrieve a single tmpauditsales with id
    router.get("/:id", tmpauditsales.findOne);

    // Update a tmpauditsales with id
    router.put("/:id", tmpauditsales.update);

    // Delete a tmpauditsales with id
    router.delete("/:id", tmpauditsales.delete);

    // Delete all tmpauditsaless
    router.delete("/", tmpauditsales.deleteAll);

    app.use("/api/tmpauditsales", router);

};
