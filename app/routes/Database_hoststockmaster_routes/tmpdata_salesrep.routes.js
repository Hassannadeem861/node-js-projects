module.exports = (app) => {

    const tmpdata_salesrep = require("../../controllers/Database_hoststockmaster_controller/tmpdata_salesrep.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tmpdata_salesrep
    router.post("/", tmpdata_salesrep.create);

    // Retrieve all tmpdata_salesreps
    router.get("/", tmpdata_salesrep.findAll);

    // Retrieve a single tmpdata_salesrep with id
    router.get("/:id", tmpdata_salesrep.findOne);

    // Update a tmpdata_salesrep with id
    router.put("/:id", tmpdata_salesrep.update);

    // Delete a tmpdata_salesrep with id
    router.delete("/:id", tmpdata_salesrep.delete);

    // Delete all tmpdata_salesreps
    router.delete("/", tmpdata_salesrep.deleteAll);

    app.use("/api/tmpdata_salesrep", router);

};
