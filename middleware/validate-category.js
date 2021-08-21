const { response, request } = require('express');

//const { CategoryExistById } = require('../helper/db-validation');

const moongose = require('mongoose').Types.ObjectId;


const {Category} = require('../models');


const validateCategory = async (req =request, res =response , next) => {

    const {category} = req.body;

    console.log('req----> ',category);

    const validID = moongose.isValid(category);

    if(!validID){
        return res.status(500).json({
            msg: 'El id de la categoria no es valido'
        });
    }

    if(!category){
        return res.status(500).json({
            msg: 'Se requiere una categoria'
        });
    }

    const categoryExist = await Category.findById(category);
    if (!categoryExist){
      return res.status(404).json({
            msg: `La categoria con id ${category} no existe`
        });
    }

    req.categoryID = category;

    next();
}




module.exports = {validateCategory};