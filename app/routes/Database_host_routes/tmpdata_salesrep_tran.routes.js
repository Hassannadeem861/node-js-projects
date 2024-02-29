module.exports = (app) => {
    const tmpdata_salesrep_tran = require("../../controllers/Database_host_controller/tmpdata_salesrep_tran.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();
    
      // Create a new tmpdata_salesrep_tran
      router.post("/", tmpdata_salesrep_tran.create);
    
      // Retrieve all tmpdata_salesrep_tran
      router.get("/", tmpdata_salesrep_tran.findAll);
    
      // Retrieve all published tmpdata_salesrep_tran
      router.get("/published", tmpdata_salesrep_tran.findAllPublished);
    
      // Retrieve a single Tutorial with id
      router.get("/:id", tmpdata_salesrep_tran.findOne);
    
      // Update a Tutorial with id
      router.put("/:id", tmpdata_salesrep_tran.update);
    
      // Delete a Tutorial with id
      router.delete("/:id", tmpdata_salesrep_tran.delete);
    
      // Delete all tmpdata_salesrep_tran
      router.delete("/", tmpdata_salesrep_tran.deleteAll);
    
      app.use("/api/tmpdata_salesrep_tran", router);
    };
    