module.exports = (app) => {

    const listauditclaims = require("../../controllers/Database_hosthistory_controller/tbllistauditclaim.controller");
  //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
    var router = require("express").Router();
// Create a new Listauditclaim
router.post("/", listauditclaims.create);

// Retrieve all Listauditclaims
router.get("/", listauditclaims.findAll);

// Retrieve a single Listauditclaim with id
router.get("/:id", listauditclaims.findOne);

// Update a Listauditclaim with id
router.put("/:id", listauditclaims.update);

// Delete a Listauditclaim with id
router.delete("/:id", listauditclaims.delete);

// Delete all Listauditclaims
router.delete("/", listauditclaims.deleteAll);

app.use("/api/tbllistauditclaim", router);
    
};
