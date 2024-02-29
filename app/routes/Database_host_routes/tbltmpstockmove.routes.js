module.exports = (app) => {
    const tbltmpstockmove = require("../../controllers/Database_host_controller/tbltmpstockmove.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tbltmpstockmove
    router.post("/", tbltmpstockmove.create);

    // Retrieve all tbltmpstockmove
    router.get("/", tbltmpstockmove.findAll);

    // Retrieve a single tbltmpstockmove with id
    router.get("/:id", tbltmpstockmove.findOne);


    // Update a tbltmpstockmove with id
    router.put("/:id", tbltmpstockmove.update);

    // Delete a tbltmpstockmove with id
    router.delete("/:id", tbltmpstockmove.delete);

    // Delete all tbltmpstockmove
    router.delete("/", tbltmpstockmove.deleteAll);

    // // Retrieve all published tbltmpstockmove
    // router.get("/published", tbltmpstockmove.findAllPublished);



    app.use("/api/tbltmpstockmove", router);
};
