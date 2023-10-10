const Product = require('../models/product');


exports.postAddProduct = (req, res, next) => {
    const { title, description, price, imageUrl } = req.body
    const product = new Product(title, imageUrl, description, price);
    product.save();
    res.redirect('/');
};

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
    });
};
exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('admin/products', {
            prods: products,
            pageTitle: 'Admin Products',
            path: '/admin/products',
        });
    });
};