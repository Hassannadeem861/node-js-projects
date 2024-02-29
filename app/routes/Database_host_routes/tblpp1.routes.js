module.exports = (app) => {
  const tblpp1 = require("../../controllers/Database_host_controller/tblpp1.controller");
  // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
  var router = require("express").Router();

    // Create a new tblpp1
    router.post("/", tblpp1.create);
  
    // Retrieve all tblpp1
    router.get("/", tblpp1.findAll);
  
    // Retrieve all published tblpp1
    router.get("/published", tblpp1.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tblpp1.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tblpp1.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tblpp1.delete);
  
    // Delete all tblpp1
    router.delete("/", tblpp1.deleteAll);
  
    app.use("/api/tblpp1", router);
  };
  