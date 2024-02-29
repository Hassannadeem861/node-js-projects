module.exports = (app) => {
    const tblpp = require("../../controllers/Database_host_controller/tblpp.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
  
    // Create a new tblpp
    router.post("/", tblpp.create);
  
    // Retrieve all tblpps
    router.get("/", tblpp.findAll);
  
    // Retrieve all published tblpps
    router.get("/published", tblpp.findAllPublished);
  
    // Retrieve a single tblpp with id
    router.get("/:id", tblpp.findOne);
  
    // Update a tblpp with id
    router.put("/:id", tblpp.update);
  
    // Delete a tblpp with id
    router.delete("/:id", tblpp.delete);
  
    // Delete all tblpps
    router.delete("/", tblpp.deleteAll);
  
    app.use("/api/tblpp", router);
};
