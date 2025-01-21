const express = require("express");
const cayegoryRouter = express.Router();
const categoryController = require("../controller/category_controller");
// // validation
// const { validateUsers } = require("../middleware/validators/users");
// const validate = require("../middleware/validators/validate");
const authJwt = require("../middleware/validators/authJwt");

// Login  Users
// usersRouter.post('/auth/users', userController.AuthUsers)

// Create new category
cayegoryRouter.post(
  "/category",
  authJwt.verifyToken,
  categoryController.categoryStore
);

// // Update  User
// usersRouter.put(
//   "/category/:id",
//   authJwt.verifyToken,
//   categoryController.categoryEdit
// );

module.exports = cayegoryRouter;
