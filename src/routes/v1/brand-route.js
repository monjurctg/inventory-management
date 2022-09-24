const express = require("express");
const brandController = require("../../controllers/brand-controller");

const router = express.Router();

// all route of brand
router
  .route("/")
  .post(brandController.createBrand)
  .get(brandController.getAllBrand);

//   single useer
router
  .route("/:id")
  .patch(brandController.updateOne)
  .delete(brandController.deleteSingleBrand)
  .get(brandController.getSingleBrand);

// export router
module.exports = router;
