const Brand = require("../models/brand-models");

let brandService = {};
brandService.createBrand = async (data) => {
  const result = await Brand.create(data);
  return result;
};

brandService.getAllBrand = async () => {
  const brands = await Brand.find({}).select("-products -suppliers");
  return brands;
};

brandService.singleBrandById = async (id) => {
  const brand = await Brand.findOne({_id: id});
  return brand;
};

brandService.updateBrand = async (id, data) => {
  const result = await Brand.updateOne({_id: id}, data, {
    runValidators: true,
  });
  return result;
};

module.exports = brandService;
