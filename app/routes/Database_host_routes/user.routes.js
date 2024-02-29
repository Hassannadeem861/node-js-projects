// user.routes.js
module.exports = (app) => {
  const User = require("../../controllers/Database_host_controller/user.controller.js");
  const { verifyToken } = require("../../middleware/authMiddleware.js");
  const {
    isAdmin,
    checkAdminOrPermission,
  } = require("../../middleware/roleMiddleware.js");

  // const authMiddleware = require("../middleware/authMiddleware");
  var router = require("express").Router();

  // User Registration (no authentication required for registration)

  router.post("/register", verifyToken, isAdmin, User.create);
  // Inside user.routes.js

  router.post("/login", User.login);

  // Retrieve all published User

  router.get(
    "/",
    verifyToken,
    checkAdminOrPermission(["viewUser"]),
    User.findAll
  );

  // Retrieve a single User with id
  router.get("/:id", User.findOne);

  // Update a User with id
  router.put("/:id", User.update);

  // Delete a User with id
  router.delete("/:id", User.delete);

  // Delete all User
  // router.delete("/", User.deleteAll);
  router.delete("/:id", verifyToken, isAdmin, User.delete);

  // Find all User with a specific role
  router.get("/byRole/:role", User.findAllByRole);

  // Admin route
  router.post("/adminRoute", verifyToken, User.adminRoute);
  router.post("/assignRole", verifyToken, isAdmin, User.assignRole);

  // User and Employee route
  router.post(
    "/userEmployeeRoute",

    User.userEmployeeRoute
  );

  // All roles route
  router.post(
    "/allRolesRoute",

    User.allRolesRoute
  );

  app.use("/api/User", router);
};
