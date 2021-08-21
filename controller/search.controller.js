const { response, request } = require('express');
const moongose = require('mongoose').Types.ObjectId;
const {
    Category,
    Product,
    User
} = require('../models');

const collectionAllowed = [
    'user',
    'category',
    'product'
];




const searchUser = async (arg, res) => {


    const validID = moongose.isValid(arg);
    // busqueda unico usuario por id
    if (validID) {
        const user = await User.findById(arg);

        return res.json({
            results: (user) ? [user] : []
        });
    }


    //hacer la busqueda unsensitive
    const regex = new RegExp(arg, 'i');
    // busqueda por usuarios con termino nombre , email y estado activo
    const users = await User.find({
        $or: [{ nombre: regex }, { email: regex }],
        $and: [{ estado: true }]
    });

    res.results = { users };

    return res.json({
        results: users
    });

}

const searchCategory = async (arg, res) => {

    const validID = moongose.isValid(arg);
    // busqueda unico categoria por id
    if (validID) {
        const category = await Category.findById(arg).populate('user','nombre');
        
        return res.json({
            results: (category) ? [category] : []
        });
    }

    //hacer la busqueda unsensitive
    const regex = new RegExp(arg, 'i');
    // busqueda por categoria con termino nombre  y estado activo
    const categories = await Category.find({
        $or: [{ nombre: regex }],
        $and: [{ estado: true }]
    }).populate('user','nombre');

    res.results = { categories };

    return res.json({
        results: categories
    });
}


const searchProduct = async (arg, res) => {

    const validID = moongose.isValid(arg);
    // busqueda unico usuario por id
    if (validID) {
        const product = await Product.findById(arg)
                                        .populate('user','nombre')
                                        .populate('category','nombre');

        return res.json({
            results: (product) ? [product] : []
        });
    }

    //hacer la busqueda unsensitive
    const regex = new RegExp(arg, 'i');
    // busqueda por producto con termino nombre y estado activo
    const products = await Product.find({
        $or: [{ nombre: regex }],
        $and: [{ estado: true }]
    })
    .populate('user','nombre')
    .populate('category','nombre');

    res.results = { products };

    return res.json({
        results: products
    });

}

const
    searchByCollection = {
        user: searchUser,
        category: searchCategory,
        product: searchProduct,
    },
    defaultsearchByCollection = 'añadir nuevas busquedas'
    ;



const search = async (req, res = response) => {


    try {

        //params route
        const { collection, arg } = req.params;


        if (!collectionAllowed.includes(collection)) {
            return res.status(400).json({
                msg: `La collecion ${collection} no existe pruebe con ${collectionAllowed}`,
            });
        }

        const search = searchByCollection[collection] || defaultsearchByCollection;

        const result = await search(arg, res);

        console.log(result.results);


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'error 500 contactar con el administrador',
        });

    }

}






module.exports = {
    search
}