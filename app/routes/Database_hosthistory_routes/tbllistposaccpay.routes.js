module.exports = (app) => {

    const listposaccpay = require("../../controllers/Database_hosthistory_controller/tbllistposaccpay.controller");
    //  const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
      var router = require("express").Router();
    
    // Create a new listposaccpay
    router.post("/", listposaccpay.create);
    
    // Retrieve all listposaccpay
    router.get("/", listposaccpay.findAll);
    
    // Retrieve a single listposaccpay with id
    router.get("/:id", listposaccpay.findOne);
    
    // Update a listposaccpay with id
    router.put("/:id", listposaccpay.update);
    
    // Delete a listposaccpay with id
    router.delete("/:id", listposaccpay.delete);
    
    // Delete all listposaccpay
    router.delete("/", listposaccpay.deleteAll);
    
    app.use("/api/tbllistposaccpay", router);
        
    };
    