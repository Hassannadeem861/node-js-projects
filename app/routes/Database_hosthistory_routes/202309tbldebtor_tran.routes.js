// routes/202310tbldata_current_tran.routes.js

module.exports = app => {
    const tbldeb_tor_tran = require("../../controllers/Database_hosthistory_controller/202309tbldebtor_tran.controller");
  //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tbldeb_tor_tran
    router.post("/", tbldeb_tor_tran.create);

    // Retrieve all tbldeb_tor_tran
    router.get("/", tbldeb_tor_tran.findAll);

    // Retrieve a single tbldeb_tor_tran with id
    router.get("/:id", tbldeb_tor_tran.findOne);

    // Update a tbldeb_tor_tran with id
    router.put("/:id", tbldeb_tor_tran.update);

    // Delete a tbldeb_tor_tran with id
    router.delete("/:id", tbldeb_tor_tran.delete);

    // Delete all tbldeb_tor_tran
    router.delete("/", tbldeb_tor_tran.deleteAll);

    app.use('/api/202309tbldebtor_tran', router);
};
