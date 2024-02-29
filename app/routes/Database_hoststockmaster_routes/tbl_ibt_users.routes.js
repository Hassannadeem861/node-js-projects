module.exports = (app) => {

    const tbl_ibt_users = require("../../controllers/Database_hoststockmaster_controller/tbl_ibt_users.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tbl_ibt_users
    router.post("/", tbl_ibt_users.create);

    // Retrieve all tbl_ibt_userss
    router.get("/", tbl_ibt_users.findAll);

    // Retrieve a single tbl_ibt_users with id
    router.get("/:id", tbl_ibt_users.findOne);

    // Update a tbl_ibt_users with id
    router.put("/:id", tbl_ibt_users.update);

    // Delete a tbl_ibt_users with id
    router.delete("/:id", tbl_ibt_users.delete);

    // Delete all tbl_ibt_userss
    router.delete("/", tbl_ibt_users.deleteAll);

    app.use("/api/tbl_ibt_users", router);

};
