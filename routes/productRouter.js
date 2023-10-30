const express = require('express');
const student = require('../models/studentModel')
const router = express.Router();

const productController = require('../controller/productController')

router.get('/product',productController.getAllProducts );

router.get('/product/:id',productController.getProduct );

router.put('/product/:id',productController.updateProduct);

router.delete('/product/:id',productController.deleteProduct )

router.post('/product',productController.addProduct );

router.post('/student', async(req, res) =>{
    try{

        const prod = await student.create(req.body);
        res.status(200).json(prod);
    }catch ( error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }

});

module.exports = router;