module.exports = (app) => {
    const tbltmpdailysales = require("../../controllers/Database_host_controller/tbltmpdailysales.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tbltmpdailysales
    router.post("/", tbltmpdailysales.create);

    // Retrieve all tbltmpdailysales
    router.get("/", tbltmpdailysales.findAll);

    // Retrieve a single tbltmpdailysales with id
    router.get("/:id", tbltmpdailysales.findOne);


    // Update a tbltmpdailysales with id
    router.put("/:id", tbltmpdailysales.update);

    // Delete a tbltmpdailysales with id
    router.delete("/:id", tbltmpdailysales.delete);

    // Delete all tbltmpdailysales
    router.delete("/", tbltmpdailysales.deleteAll);

    // // Retrieve all published tbltmpdailysales
    // router.get("/published", tblsettings.findAllPublished);



    app.use("/api/tbltmpdailysales", router);
};
