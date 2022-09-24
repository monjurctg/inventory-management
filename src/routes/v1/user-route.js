const express = require("express");

const userControllers = require("../../controllers/user-controllers");

const router = express.Router();

// all route of user
router
  .route("/")
  .post(userControllers.createUser)
  .get(userControllers.getALlUser);

//   single useer
router
  .route("/:id")
  .patch((req, res) => {})
  .delete((req, res) => {})
  .get((req, res) => {});

// export router
module.exports = router;
