module.exports = (app) => {

    const tmpsums = require("../../controllers/Database_hoststockmaster_controller/tmpsums.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tmpsums
    router.post("/", tmpsums.create);

    // Retrieve all tmpsumss
    router.get("/", tmpsums.findAll);

    // Retrieve a single tmpsums with id
    router.get("/:id", tmpsums.findOne);

    // Update a tmpsums with id
    router.put("/:id", tmpsums.update);

    // Delete a tmpsums with id
    router.delete("/:id", tmpsums.delete);

    // Delete all tmpsumss
    router.delete("/", tmpsums.deleteAll);

    app.use("/api/tmpsums", router);

};
