module.exports = (app) => {

    const tbl_ibt_products = require("../../controllers/Database_hoststockmaster_controller/tbl_ibt_products.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tbl_ibt_products
    router.post("/", tbl_ibt_products.create);

    // Retrieve all tbl_ibt_productss
    router.get("/", tbl_ibt_products.findAll);

    // Retrieve a single tbl_ibt_products with id
    router.get("/:id", tbl_ibt_products.findOne);

    // Update a tbl_ibt_products with id
    router.put("/:id", tbl_ibt_products.update);

    // Delete a tbl_ibt_products with id
    router.delete("/:id", tbl_ibt_products.delete);

    // Delete all tbl_ibt_productss
    router.delete("/", tbl_ibt_products.deleteAll);

    app.use("/api/tbl_ibt_products", router);

};
