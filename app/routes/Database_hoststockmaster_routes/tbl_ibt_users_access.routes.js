module.exports = (app) => {

    const tbl_ibt_users_access = require("../../controllers/Database_hoststockmaster_controller/tbl_ibt_users_access.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tbl_ibt_users_access
    router.post("/", tbl_ibt_users_access.create);

    // Retrieve all tbl_ibt_users_accesss
    router.get("/", tbl_ibt_users_access.findAll);

    // Retrieve a single tbl_ibt_users_access with id
    router.get("/:id", tbl_ibt_users_access.findOne);

    // Update a tbl_ibt_users_access with id
    router.put("/:id", tbl_ibt_users_access.update);

    // Delete a tbl_ibt_users_access with id
    router.delete("/:id", tbl_ibt_users_access.delete);

    // Delete all tbl_ibt_users_accesss
    router.delete("/", tbl_ibt_users_access.deleteAll);

    app.use("/api/tbl_ibt_users_access", router);

};
