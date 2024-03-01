module.exports = (app) => {

    const tmprefunds = require("../../controllers/Database_hoststockmaster_controller/tmprefunds.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tmprefunds
    router.post("/", tmprefunds.create);

    // Retrieve all tmprefundss
    router.get("/", tmprefunds.findAll);

    // Retrieve a single tmprefunds with id
    router.get("/:id", tmprefunds.findOne);

    // Update a tmprefunds with id
    router.put("/:id", tmprefunds.update);

    // Delete a tmprefunds with id
    router.delete("/:id", tmprefunds.delete);

    // Delete all tmprefundss
    router.delete("/", tmprefunds.deleteAll);

    app.use("/api/tmprefunds", router);

};
