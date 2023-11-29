const { Product } = require('../models');

const productData = [
  {
    product_name: 'Dress Shirt',
    price: 25.0,
    stock: 20,
    category_id: 1,
  },
  {
    product_name: 'V-Neck Shirt',
    price: 22.99,
    stock: 12,
    category_id: 2,
  },
  {
    product_name: 'Workout Shorts',
    price: 19.99,
    stock: 15,
    category_id: 3,
  },
  {
    product_name: 'Yoga Pants',
    price: 29.99,
    stock: 22,
    category_id: 4,
  },
  {
    product_name: 'Floral Print Dress',
    price: 59.99,
    stock: 5,
    category_id: 5,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;