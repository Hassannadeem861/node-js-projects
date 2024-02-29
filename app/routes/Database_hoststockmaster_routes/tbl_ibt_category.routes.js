module.exports = (app) => {

    const tbl_ibt_category = require("../../controllers/Database_hoststockmaster_controller/tbl_ibt_category.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tbl_ibt_category
    router.post("/", tbl_ibt_category.create);

    // Retrieve all tbl_ibt_categorys
    router.get("/", tbl_ibt_category.findAll);

    // Retrieve a single tbl_ibt_category with id
    router.get("/:id", tbl_ibt_category.findOne);

    // Update a tbl_ibt_category with id
    router.put("/:id", tbl_ibt_category.update);

    // Delete a tbl_ibt_category with id
    router.delete("/:id", tbl_ibt_category.delete);

    // Delete all tbl_ibt_categorys
    router.delete("/", tbl_ibt_category.deleteAll);

    app.use("/api/tbl_ibt_category", router);

};
