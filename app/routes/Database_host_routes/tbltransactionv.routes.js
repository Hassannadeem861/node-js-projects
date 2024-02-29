module.exports = (app) => {
    const tbltransactionv = require("../../controllers/Database_host_controller/tbltransactionv.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tbltransactionv
    router.post("/", tbltransactionv.create);

    // Retrieve all tbltransactionv
    router.get("/", tbltransactionv.findAll);

    // Retrieve a single tbltransactionv with id
    router.get("/:id", tbltransactionv.findOne);


    // Update a tbltransactionv with id
    router.put("/:id", tbltransactionv.update);

    // Delete a tbltransactionv with id
    router.delete("/:id", tbltransactionv.delete);

    // Delete all tbltransactionv
    router.delete("/", tbltransactionv.deleteAll);

    // // Retrieve all published tbltransactionv
    // router.get("/published", tbltransactionv.findAllPublished);



    app.use("/api/tbltransactionv", router);
};
