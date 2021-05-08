const express = require('express')
const Product = require('../models/product')

const getAllProducts = (req, res) => {
    Product
        .find({}, (err, data) => {
            if(err) console.log(err)
            if(data) res.json({products: data});
            else res.json({products: 'dont exist'})
        })
}
const getProductById = (req, res) => {
    Product
        .find(req.body.id, (err, data) => {
            if(err) console.log(err)
            if(data) res.json({product: data});
            else res.json({product: 'dont exist'})
        })
}

module.exports = {
    getAllProducts,
    getProductById
}