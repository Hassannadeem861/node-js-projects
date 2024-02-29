module.exports = (app) => {

    const tbl_ibt_comboitems = require("../../controllers/Database_hoststockmaster_controller/tbl_ibt_comboitems.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tbl_ibt_comboitems
    router.post("/", tbl_ibt_comboitems.create);

    // Retrieve all tbl_ibt_comboitemss
    router.get("/", tbl_ibt_comboitems.findAll);

    // Retrieve a single tbl_ibt_comboitems with id
    router.get("/:id", tbl_ibt_comboitems.findOne);

    // Update a tbl_ibt_comboitems with id
    router.put("/:id", tbl_ibt_comboitems.update);

    // Delete a tbl_ibt_comboitems with id
    router.delete("/:id", tbl_ibt_comboitems.delete);

    // Delete all tbl_ibt_comboitemss
    router.delete("/", tbl_ibt_comboitems.deleteAll);

    app.use("/api/tbl_ibt_comboitems", router);

};
