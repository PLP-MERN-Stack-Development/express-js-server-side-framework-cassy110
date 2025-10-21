const ValidationError = require('../errors/ValidationError');

const validateProduct = (req, res, next) => {
  const { name, description, price, category, inStock } = req.body;
  if (!name || !description || price === undefined || !category || typeof inStock !== 'boolean') {
    return next(new ValidationError('Invalid product data. Ensure all fields are provided.'));
  }
  next();
};

module.exports = validateProduct;
