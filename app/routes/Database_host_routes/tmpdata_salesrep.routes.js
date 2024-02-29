module.exports = (app) => {
    const tmpdata_salesrep = require("../../controllers/Database_host_controller/tmpdata_salesrep.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tmpdata_salesrep
    router.post("/", tmpdata_salesrep.create);

    // Retrieve all tmpdata_salesrep
    router.get("/", tmpdata_salesrep.findAll);

    // Retrieve all published tmpdata_salesrep
    router.get("/published", tmpdata_salesrep.findAllPublished);

    // Retrieve a single Tutorial with id
    router.get("/:id", tmpdata_salesrep.findOne);

    // Update a Tutorial with id
    router.put("/:id", tmpdata_salesrep.update);

    // Delete a Tutorial with id
    router.delete("/:id", tmpdata_salesrep.delete);

    // Delete all tmpdata_salesrep
    router.delete("/", tmpdata_salesrep.deleteAll);

    app.use("/api/tmpdata_salesrep", router);
};
