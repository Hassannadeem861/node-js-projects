module.exports = (app) => {

    const tmpproductperformance = require("../../controllers/Database_hoststockmaster_controller/tmpproductperformance.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tmpproductperformance
    router.post("/", tmpproductperformance.create);

    // Retrieve all tmpproductperformances
    router.get("/", tmpproductperformance.findAll);

    // Retrieve a single tmpproductperformance with id
    router.get("/:id", tmpproductperformance.findOne);

    // Update a tmpproductperformance with id
    router.put("/:id", tmpproductperformance.update);

    // Delete a tmpproductperformance with id
    router.delete("/:id", tmpproductperformance.delete);

    // Delete all tmpproductperformances
    router.delete("/", tmpproductperformance.deleteAll);

    app.use("/api/tmpproductperformance", router);

};
