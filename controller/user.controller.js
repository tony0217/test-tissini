const { response, request } = require('express');
const User= require('../models/user.model');
const bcrypt = require('bcrypt');



const getUser = async(req, res = response) => {

    try {

        // query params
        const {limit = 5, from = 0 } = req.query;
        const query = {estado:true}

        // forma no optima
        // const user = await User.find(query)
        //     .skip(Number(from))
        //     .limit(Number(limit))
        // ;
        // const total = await User.countDocuments(query);


        // forma optima
        const [total , user] = await Promise.all([
            User.countDocuments(query),
            User.find(query)
            .skip(Number(from))
            .limit(Number(limit))
        ]);
    
        res.json({total,user});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'error 500 contactar con el administrador',
       });
          
    }


}

const postUser = async (req = request, res = response) => {

    try {
        // field que se requieren del body
       const {nombre,edad, rol,password,email} = req.body;
       const user = User({nombre,edad, rol,password,email});

       //pass encrypt
       const salt = bcrypt.genSaltSync();
       user.password = bcrypt.hashSync(password, salt);

       await user.save();

       res.status(201).json({
            msg: 'datos guardados',
            user
       });

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'error 500 contactar con el administrador',
       });
        
    }

}


const putUser = async (req = request, res = response) => {

    try {

        //params route
        const {id} = req.params;
        // sacar lo parametros que no se requieren
        const {_id,password,google,email,...rest} = req.body;

        //validar contra db password
        if (password) {
            const salt = bcrypt.genSaltSync();
            rest.password = bcrypt.hashSync(password, salt);
        }

        const user = await User.findByIdAndUpdate(id,rest)

        res.status(200).json({
            msg: 'datos actualizado!',
            user
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'error 500 contactar con el administrador',
       });
        
    }

   
}


const deleteUser = async (req = request, res = response) => {


    try {

        const {id} = req.params;
        const query = { estado:false }

        // eliminacion fisica
        //const user = await User.findOneAndDelete({ _id: id });

       
        // soft delete
        const user = await User.findByIdAndUpdate(id,query);
        const userAuth =  await req.userAuth; 

        

        res.json({
            msg: `Usuario ${user.nombre} eliminado!`,
            auth:userAuth
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'error 500 contactar con el administrador',
       });
    }
   
}


const patchUser = (req = request, res = response) => {
    res.json({
        msg: 'patch Api'
    });
}




module.exports = {
    getUser,
    postUser,
    putUser,
    deleteUser,
    patchUser
}