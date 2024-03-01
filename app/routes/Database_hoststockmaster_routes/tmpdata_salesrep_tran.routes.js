module.exports = (app) => {

    const tmpdata_salesrep_tran = require("../../controllers/Database_hoststockmaster_controller/tmpdata_salesrep_tran.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tmpdata_salesrep_tran
    router.post("/", tmpdata_salesrep_tran.create);

    // Retrieve all tmpdata_salesrep_trans
    router.get("/", tmpdata_salesrep_tran.findAll);

    // Retrieve a single tmpdata_salesrep_tran with id
    router.get("/:id", tmpdata_salesrep_tran.findOne);

    // Update a tmpdata_salesrep_tran with id
    router.put("/:id", tmpdata_salesrep_tran.update);

    // Delete a tmpdata_salesrep_tran with id
    router.delete("/:id", tmpdata_salesrep_tran.delete);

    // Delete all tmpdata_salesrep_trans
    router.delete("/", tmpdata_salesrep_tran.deleteAll);

    app.use("/api/tmpdata_salesrep_tran", router);

};
