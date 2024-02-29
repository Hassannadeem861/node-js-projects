module.exports = (app) => {

    const tmpavgsale = require("../../controllers/Database_host_controller/tmpavgsale.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tmpavgsale
    router.post("/", tmpavgsale.create);

    // Retrieve all tmpavgsales
    router.get("/", tmpavgsale.findAll);

    // Retrieve a single tmpavgsale with id
    router.get("/:id", tmpavgsale.findOne);

    // Update a tmpavgsale with id
    router.put("/:id", tmpavgsale.update);

    // Delete a tmpavgsale with id
    router.delete("/:id", tmpavgsale.delete);

    // Delete all tmpavgsales
    router.delete("/", tmpavgsale.deleteAll);

    app.use("/api/tmpavgsale", router);

};
