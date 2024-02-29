module.exports = (app) => {

    const tbl_ibt_category_sub1 = require("../../controllers/Database_hoststockmaster_controller/tbl_ibt_category_sub1.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tbl_ibt_category_sub1
    router.post("/", tbl_ibt_category_sub1.create);

    // Retrieve all tbl_ibt_category_sub1s
    router.get("/", tbl_ibt_category_sub1.findAll);

    // Retrieve a single tbl_ibt_category_sub1 with id
    router.get("/:id", tbl_ibt_category_sub1.findOne);

    // Update a tbl_ibt_category_sub1 with id
    router.put("/:id", tbl_ibt_category_sub1.update);

    // Delete a tbl_ibt_category_sub1 with id
    router.delete("/:id", tbl_ibt_category_sub1.delete);

    // Delete all tbl_ibt_category_sub1s
    router.delete("/", tbl_ibt_category_sub1.deleteAll);

    app.use("/api/tbl_ibt_category_sub1", router);

};
