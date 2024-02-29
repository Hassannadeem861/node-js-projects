module.exports = (app) => {

    const tbl_ibt_locations = require("../../controllers/Database_hoststockmaster_controller/tbl_ibt_locations.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tbl_ibt_locations
    router.post("/", tbl_ibt_locations.create);

    // Retrieve all tbl_ibt_locationss
    router.get("/", tbl_ibt_locations.findAll);

    // Retrieve a single tbl_ibt_locations with id
    router.get("/:id", tbl_ibt_locations.findOne);

    // Update a tbl_ibt_locations with id
    router.put("/:id", tbl_ibt_locations.update);

    // Delete a tbl_ibt_locations with id
    router.delete("/:id", tbl_ibt_locations.delete);

    // Delete all tbl_ibt_locationss
    router.delete("/", tbl_ibt_locations.deleteAll);

    app.use("/api/tbl_ibt_locations", router);

};
