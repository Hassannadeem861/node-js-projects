module.exports = (app) => {

    const tmpmainpcstocktake = require("../../controllers/Database_hoststockmaster_controller/tmpmainpcstocktake.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tmpmainpcstocktake
    router.post("/", tmpmainpcstocktake.create);

    // Retrieve all tmpmainpcstocktakes
    router.get("/", tmpmainpcstocktake.findAll);

    // Retrieve a single tmpmainpcstocktake with id
    router.get("/:id", tmpmainpcstocktake.findOne);

    // Update a tmpmainpcstocktake with id
    router.put("/:id", tmpmainpcstocktake.update);

    // Delete a tmpmainpcstocktake with id
    router.delete("/:id", tmpmainpcstocktake.delete);

    // Delete all tmpmainpcstocktakes
    router.delete("/", tmpmainpcstocktake.deleteAll);

    app.use("/api/tmpmainpcstocktake", router);

};
