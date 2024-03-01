module.exports = (app) => {

    const tmpmainstocktake = require("../../controllers/Database_hoststockmaster_controller/tmpmainstocktake.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tmpmainstocktake
    router.post("/", tmpmainstocktake.create);

    // Retrieve all tmpmainstocktakes
    router.get("/", tmpmainstocktake.findAll);

    // Retrieve a single tmpmainstocktake with id
    router.get("/:id", tmpmainstocktake.findOne);

    // Update a tmpmainstocktake with id
    router.put("/:id", tmpmainstocktake.update);

    // Delete a tmpmainstocktake with id
    router.delete("/:id", tmpmainstocktake.delete);

    // Delete all tmpmainstocktakes
    router.delete("/", tmpmainstocktake.deleteAll);

    app.use("/api/tmpmainstocktake", router);

};
