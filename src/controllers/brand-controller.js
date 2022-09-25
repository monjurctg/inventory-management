const brandService = require("../services/brand-service");

const brandController = {};

brandController.createBrand = async (req, res) => {
  const data = req.body;
  try {
    const result = await brandService.createBrand(data);
    if (result)
      res.status(200).json({
        success: true,
        data: result,
        message: "brand created successfully",
      });
    else throw Error("no data founddd");
  } catch (err) {
    throw Error(err);
  }
};

// get all brands
brandController.getAllBrand = async (req, res) => {
  const result = await brandService.getAllBrand();
  if (result)
    res.status(200).json({
      success: true,
      data: result,
      message: "brand created successfully",
    });
  else throw Error("no data found");
};

// get  a single brand
brandController.getSingleBrand = (req, res) => {};

// delete a  brand
brandController.deleteSingleBrand = (req, res) => {};

// update a brand
brandController.updateOne = (req, res) => {};

// export brandController

module.exports = brandController;
