const express = require('express')
const Product = require('../models/product')

const getAllProducts = (req, res, next) => {
    const products = Product
        .find({})
        .then(() => console.log())
        .catch(err => console.log(err))
    res.json(products);
}
const getProductById = (req, res, next) => {
    const product = Product
        .find(req.body.id)
        .then(() => console.log())
        .catch(err => console.log(err))
    res.json(product);
}

module.exports = {
    getAllProducts,
    getProductById
}