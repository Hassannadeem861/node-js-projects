module.exports = (app) => {

    const tmpcashbank_tran = require("../../controllers/Database_host_controller/tmpcashbank_tran.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tmpcashbank_tran
    router.post("/", tmpcashbank_tran.create);

    // Retrieve all tmpcashbank_trans
    router.get("/", tmpcashbank_tran.findAll);

    // Retrieve a single tmpcashbank_tran with id
    router.get("/:id", tmpcashbank_tran.findOne);

    // Update a tmpcashbank_tran with id
    router.put("/:id", tmpcashbank_tran.update);

    // Delete a tmpcashbank_tran with id
    router.delete("/:id", tmpcashbank_tran.delete);

    // Delete all tmpcashbank_trans
    router.delete("/", tmpcashbank_tran.deleteAll);

    app.use("/api/tmpcashbank_tran", router);

};
