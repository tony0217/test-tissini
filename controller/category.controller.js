const { response, request } = require('express');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const Category = require('../models/category.model');



const getCategory = async(req, res = response) => {

    const {limit = 5, from = 0 } = req.query;
    const query = {estado:true}


    try {


        //const category = await Category.find().populate('user','nombre')

        // tolta y categorias
           const [total , category] = await Promise.all([
            Category.countDocuments(query),
            Category.find(query)
            .populate('user','nombre')
            .skip(Number(from))
            .limit(Number(limit))
        ]);
    


        res.json({
            total,
            category
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'error 500 contactar con el administrador',
       });
          
    }

}


const getCategoryById = async(req, res = response) => {

     //params route
     const {id} = req.params;
     const query = { estado:false }


    try {


    
        const category = await Category.findById(id,query).populate('user','nombre');

     
        res.json({
            category
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'error 500 contactar con el administrador',
       });
          
    }

}



const postCategory = async(req, res = response) => {


    try {

        const nombre = req.body.nombre;

        const categoryDB = await Category.findOne({nombre});
        const userAuth =  await req.userAuth; 

        console.log(req.uid);

        if (categoryDB){

            return res.status(404).json({
                msg: `La categoria ${categoryDB.nombre} ya existe`
            });

        }

        // generar la data para guardar

        const data = {
            nombre,
            user:req.uid
        }

        // crear nueva categoria
        const category = new Category(data);

        // guardar en db

        await category.save();

        res.status(201).json({
            msg:'categoria creada',
            category
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'error 500 contactar con el administrador',
       });
          
    }

}




const putCategory = async (req = request, res = response) => {

    try {

        //params route
        const {id} = req.params;


        // datos del body
        const {_id, ...data} = req.body;

        // añadir nuevos a data
        data.nombre  = data.nombre.toUpperCase();
        data.user  =  await req.uid; 


        // actualize y muestre el nuevo registro
        const category = await Category.findByIdAndUpdate(id,data,{new:true})

        //const categoryResult = await Category.findById(id);

        res.status(200).json({
            msg: 'datos actualizado!',
            category

            //data_prev:category,
            //data_now: categoryResult
        });
    

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'error 500 contactar con el administrador',
       });
        
    }

   
}


const deleteCategory  = async (req = request, res = response) => {


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
        const category = await Category.findByIdAndUpdate(id,query);

        const {nombre} = await User.findById(userAuthID)
  

        res.json({
            msg: `Categoria ${category.nombre} eliminado!`,
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
   getCategory,
   getCategoryById,
   postCategory,
   putCategory,
   deleteCategory
}