module.exports = (app) => {

    const tmpdeliverydetails = require("../../controllers/Database_hoststockmaster_controller/tmpdeliverydetails.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tmpdeliverydetails
    router.post("/", tmpdeliverydetails.create);

    // Retrieve all tmpdeliverydetailss
    router.get("/", tmpdeliverydetails.findAll);

    // Retrieve a single tmpdeliverydetails with id
    router.get("/:id", tmpdeliverydetails.findOne);

    // Update a tmpdeliverydetails with id
    router.put("/:id", tmpdeliverydetails.update);

    // Delete a tmpdeliverydetails with id
    router.delete("/:id", tmpdeliverydetails.delete);

    // Delete all tmpdeliverydetailss
    router.delete("/", tmpdeliverydetails.deleteAll);

    app.use("/api/tmpdeliverydetails", router);

};
