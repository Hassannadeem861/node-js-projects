module.exports = (app) => {
    // const tutorials = require("../controllers/tutorial.controller.js");
    const Tbl_list = require("../../controllers/Database_hostdebtors_controller/tbllisttable.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", Tbl_list.create);
  
    // Retrieve all Tutorials
    // router.get("/", Tbl_list.findAll);
  
    // // Retrieve all published Tutorials
    // router.get("/published", Tbl_list.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    // router.get("/:id", Tbl_list.findOne);
  
    // // Update a Tutorial with id
    // router.put("/:id", Tbl_list.update);
  
    // // Delete a Tutorial with id
    // router.delete("/:id", Tbl_list.delete);
  
    // // Delete all Tutorials
    // router.delete("/", Tbl_list.deleteAll);
  
    app.use("/api/tbllist", router);
  };
  