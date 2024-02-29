// routes/202310tbldata_current_tran.routes.js

module.exports = app => {
    const tbldebtor_tran = require("../../controllers/Database_hosthistory_controller/202310tbldebtor_tran.controller");
    //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
      var router = require("express").Router();

    // Create a new tbldata_stockactivity
    router.post("/", tbldebtor_tran.create);

    // Retrieve all tbldata_stockactivity
    router.get("/", tbldebtor_tran.findAll);

    // Retrieve a single tbldata_stockactivity with id
    router.get("/:id", tbldebtor_tran.findOne);

    // Update a tbldata_stockactivity with id
    router.put("/:id", tbldebtor_tran.update);

    // Delete a tbldata_stockactivity with id
    router.delete("/:id", tbldebtor_tran.delete);

    // Delete all tbldata_stockactivity
    router.delete("/", tbldebtor_tran.deleteAll);

    app.use('/api/202310tbldebtor_tran', router);
};
