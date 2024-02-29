module.exports = (app) => {
    const tmpairtimesale = require("../../controllers/Database_host_controller/tmpairtimesale.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tmpairtimesale
    router.post("/", tmpairtimesale.create);

    // Retrieve all tmpairtimesale
    router.get("/", tmpairtimesale.findAll);

    // Retrieve a single tmpairtimesale with id
    router.get("/:id", tmpairtimesale.findOne);


    // Update a tmpairtimesale with id
    router.put("/:id", tmpairtimesale.update);

    // Delete a tmpairtimesale with id
    router.delete("/:id", tmpairtimesale.delete);

    // Delete all tmpairtimesale
    router.delete("/", tmpairtimesale.deleteAll);

    // // Retrieve all published tmpairtimesale
    // router.get("/published", tmpairtimesale.findAllPublished);



    app.use("/api/tmpairtimesale", router);
};
