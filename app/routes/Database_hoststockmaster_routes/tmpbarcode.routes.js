module.exports = (app) => {

    const tmpbarcode = require("../../controllers/Database_hoststockmaster_controller/tmpbarcode.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tmpbarcode
    router.post("/", tmpbarcode.create);

    // Retrieve all tmpbarcodes
    router.get("/", tmpbarcode.findAll);

    // Retrieve a single tmpbarcode with id
    router.get("/:id", tmpbarcode.findOne);

    // Update a tmpbarcode with id
    router.put("/:id", tmpbarcode.update);

    // Delete a tmpbarcode with id
    router.delete("/:id", tmpbarcode.delete);

    // Delete all tmpbarcodes
    router.delete("/", tmpbarcode.deleteAll);

    app.use("/api/tmpbarcode", router);

};
