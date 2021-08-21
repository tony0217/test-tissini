const { response, request } = require('express');
const User = require('../models/user.model');
const Category = require('../models/category.model');
const Product = require('../models/product.model');



const getProduct = async(req, res = response) => {

    const {limit = 5, from = 0 } = req.query;
    const query = {estado:true}

    try {

        //const category = await Category.find().populate('user','nombre')

        // tolta y categorias
           const [total , product] = await Promise.all([
             Product.countDocuments(query),
             Product.find(query)
            .populate('user','nombre')
            .populate('category','nombre')
            .skip(Number(from))
            .limit(Number(limit))
        ]);
    


        res.json({
            total,
            product
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'error 500 contactar con el administrador',
       });
          
    }

}


const getProductById = async(req, res = response) => {

     //params route
     const {id} = req.params;
     const query = { estado:false }
    try {


    
        const product = await Product.findById(id,query)
                                .populate('user','nombre')
                                .populate('category','nombre');
        res.json({product});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'error 500 contactar con el administrador',
       });
          
    }

}


const postProduct  = async(req, res = response) => {

    try {

        const {
            nombre,
            prices,
            description,
            stock
        } = req.body;
        const productDB = await Product.findOne({nombre});
        const category = await req.categoryID;
        //const userAuth =  await req.userAuth; 

        if (productDB){
            return res.status(404).json({
                msg: `El ${productDB.nombre} ya existe`
            });
        }

        // generar la data para guardar

        const data = {
            nombre,
            user:req.uid,
            prices,
            category,
            description,
            stock
        }

        // crear nueva categoria
        const product = new Product(data);

        // guardar en db

        await product.save();

        res.status(201).json({
            msg:'Producto creado',
            product
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'error 500 contactar con el administrador',
       });
          
    }

}




const putProduct  = async (req = request, res = response) => {

    try {

        //params route
        const {id} = req.params;

        // datos del body
        const {_id, ...data} = req.body;
        // añadir nuevos a data
        data.nombre  = data.nombre.toUpperCase();
        data.user  =  await req.uid; 
        data.category = await req.categoryID;


        // actualize y muestre el nuevo registro
        const product = await Product.findByIdAndUpdate(id,data,{new:true})

        res.status(200).json({
            msg: 'datos actualizado!',
            product
        });
    

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'error 500 contactar con el administrador',
       });
        
    }

   
}


const deleteProduct   = async (req = request, res = response) => {

    try {

        const {id} = req.params;

        // eliminacion fisica
        //const user = await User.findOneAndDelete({ _id: id });
        const userAuthID =  await req.uid;

        const query = {
            estado:false,
            user:userAuthID
        }

        // // soft delete
        const product = await Product.findByIdAndUpdate(id,query)
                                     .populate('category','nombre');
        const {nombre} = await User.findById(userAuthID);
        const {nombre:nombreCategory} = product.category;
  
  

        res.json({
            msg: `Producto ${product.nombre} eliminado! de la categoria ${nombreCategory}`,
            nameUser:nombre
        });
        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'error 500 contactar con el administrador',
       });
    }
   
}




module.exports = {
   getProduct ,
   getProductById,
   postProduct ,
   putProduct ,
   deleteProduct 
}