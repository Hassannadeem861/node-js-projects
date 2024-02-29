module.exports = (app) => {

    const tmpcombineditems = require("../../controllers/Database_host_controller/tmpcombineditems.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tmpcombineditems
    router.post("/", tmpcombineditems.create);

    // Retrieve all tmpcombineditemss
    router.get("/", tmpcombineditems.findAll);

    // Retrieve a single tmpcombineditems with id
    router.get("/:id", tmpcombineditems.findOne);

    // Update a tmpcombineditems with id
    router.put("/:id", tmpcombineditems.update);

    // Delete a tmpcombineditems with id
    router.delete("/:id", tmpcombineditems.delete);

    // Delete all tmpcombineditemss
    router.delete("/", tmpcombineditems.deleteAll);

    app.use("/api/tmpcombineditems", router);

};
