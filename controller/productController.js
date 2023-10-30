const product = require('../models/productModel');


const getAllProducts = async(req, res) => {
    try{
        const prod = await product.find();
        res.status(200).json(prod);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
};

const getProduct = async(req, res) =>{
    try{
        const {id} = req.params;
        const prod = await product.findById(id);
        res.status(200).json(prod);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
};

const updateProduct = async (req, res) => {
    try{
        const {id} = req.params;
        const prod = await product.findByIdAndUpdate( id, req.body);
        if( !prod){
            return res.status(404).json({message: `cannot find the product by id ${id}`});
        }
    }catch( error){
        res.status(500).json( { message: error.message});
    }
};

const deleteProduct = async ( req, res) => {
    try{
        const {id} = req.params;
        const prod = await product.findByIdAndDelete(id);
        if ( !prod){
            return res.status(404).json({messsage: `cannot find the product with above id ${id}`});
        }
        return res.status(200).json( {message: `deleted successfully ${id}`});
    }catch( error){
        res.status(404).json( { message : error.message});
    }
};

const addProduct = async(req, res) =>{
    try{

        const prod = await product.create(req.body);
        res.status(200).json(prod);
    }catch ( error){
        console.log(error.message);
        res.status(500).json({message: error.message});
    }

}

module.exports = { getAllProducts,
                   getProduct,
                   updateProduct,
                   deleteProduct, 
                   addProduct};