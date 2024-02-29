module.exports = (app) => {
    const tbltmpstocktake = require("../../controllers/Database_host_controller/tbltmpstocktake.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tbltmpstocktake
    router.post("/", tbltmpstocktake.create);

    // Retrieve all tbltmpstocktake
    router.get("/", tbltmpstocktake.findAll);

    // Retrieve a single tbltmpstocktake with id
    router.get("/:id", tbltmpstocktake.findOne);


    // Update a tbltmpstocktake with id
    router.put("/:id", tbltmpstocktake.update);

    // Delete a tbltmpstocktake with id
    router.delete("/:id", tbltmpstocktake.delete);

    // Delete all tbltmpstocktake
    router.delete("/", tbltmpstocktake.deleteAll);

    // // Retrieve all published tbltmpstocktake
    // router.get("/published", tbltmpstocktake.findAllPublished);



    app.use("/api/tbltmpstocktake", router);
};
