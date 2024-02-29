module.exports = (app) => {

    const tmpdata_current_tran = require("../../controllers/Database_host_controller/tmpdata_current_tran.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tmpdata_current_tran
    router.post("/", tmpdata_current_tran.create);

    // Retrieve all tmpdata_current_trans
    router.get("/", tmpdata_current_tran.findAll);

    // Retrieve a single tmpdata_current_tran with id
    router.get("/:id", tmpdata_current_tran.findOne);

    // Update a tmpdata_current_tran with id
    router.put("/:id", tmpdata_current_tran.update);

    // Delete a tmpdata_current_tran with id
    router.delete("/:id", tmpdata_current_tran.delete);

    // Delete all tmpdata_current_trans
    router.delete("/", tmpdata_current_tran.deleteAll);

    app.use("/api/tmpdata_current_tran", router);

};
