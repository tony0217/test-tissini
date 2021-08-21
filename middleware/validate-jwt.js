
const { response, request } = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');




const validateJWT = async (req, res = response, next) => {

    
    // validar que existe token
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            msg: 'No existe el token'
        })
    }

    try {
         // validar que token sea valido
       const {uid} = jwt.verify(token, process.env.PRIVATEKEY);
       req.uid = uid;

        //buscar usuario
       const userAuth = await User.findOne({'_id':uid});

       // usuario auth no existe en db
       if ( !userAuth ){
            return res.status(401).json({
                msg: 'token no valido - usuario no existe'
            });
       }

        // usuario auth no existe en db
        if ( !userAuth.estado ){
            return res.status(401).json({
                msg: 'token no valido - usuario con estado invalido'
            });
        }

        //asigna user en la req para pasarlo por referencia
       req.userAuth = userAuth;
       //console.log('userAut--->',userAuth);

       //console.table([userAuth.nombre]);
       next();
        
    } catch (error) {
        console.log('error ------>',error);
        return res.status(401).json({
            msg: 'token no valido'
        });
    }


}


module.exports = { validateJWT}