module.exports = (app) => {

    const tmpsalesrep = require("../../controllers/Database_hoststockmaster_controller/tmpsalesrep.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tmpsalesrep
    router.post("/", tmpsalesrep.create);

    // Retrieve all tmpsalesreps
    router.get("/", tmpsalesrep.findAll);

    // Retrieve a single tmpsalesrep with id
    router.get("/:id", tmpsalesrep.findOne);

    // Update a tmpsalesrep with id
    router.put("/:id", tmpsalesrep.update);

    // Delete a tmpsalesrep with id
    router.delete("/:id", tmpsalesrep.delete);

    // Delete all tmpsalesreps
    router.delete("/", tmpsalesrep.deleteAll);

    app.use("/api/tmpsalesrep", router);

};
