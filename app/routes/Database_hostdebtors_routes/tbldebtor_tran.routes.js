module.exports = (app) => {
    const tbldebtor_tran = require("../../controllers/Database_hostdebtors_controller/tbldebtor_tran.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
  
// Create a new tbldebtor_tran
router.post('/', tbldebtor_tran.create);

// Retrieve all tbldebtor_trans
router.get('/', tbldebtor_tran.findAll);

// Retrieve a single tbldebtor_tran with id
router.get('/:id', tbldebtor_tran.findOne);

// Update a tbldebtor_tran with id
router.put('/:id', tbldebtor_tran.update);

// Delete a tbldebtor_tran with id
router.delete('/:id', tbldebtor_tran.delete);

// Delete all tbldebtor_trans
router.delete('/', tbldebtor_tran.deleteAll);

app.use("/api/tbldebtor_tran", router);

};
