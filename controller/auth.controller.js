const { response, request } = require('express');
const User= require('../models/user.model');
const bcrypt = require('bcrypt');

const {generateJWT } = require('../helper/jwt-generate');
const { googleVerify } = require('../helper/google-verify');



const login = async (req = request, res = response) => {

    try {


        const { email, password } = req.body;
        const user = await User.findOne({email});

        if (!user) {
            return res.status(400).json({
                msg: 'usuario no se encuentra registrado',
                status:400
                
           });
        }

        if (!user.estado) {
            return res.status(400).json({
                msg: 'usuario no se encuentra registrado',
                status:400
                
           });
        }


        // compare password
        const Validpassword = await bcrypt.compareSync(password, user.password);

        if (!Validpassword) {
            return res.status(400).json({
                msg: 'Contraseña  incorrecta',
                status:400
           });
        }


        // jwt

        const token = await generateJWT(user.id);

        
       res.status(200).json({
            msg: 'login ok',
            user,
            token,
            status:200
       });

        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'error 500 contactar con el administrador',
            
       });
        
    }

}


// google singIn
const googleSingIn = async (req = request, res = response) => {

    try {

        const { id_token } = req.body;

        const { nombre,email,img} = await googleVerify(id_token);


        let user = await User.findOne({email});

        if (!user) {

            const data = {
                nombre,
                email,
                password:':p',
                img, 
                google:true
                
            };

            user = new User( data );
            await user.save();
        }

        if (!user.estado) {
            return res.status(401).json({
                msg: 'pongase en contacto con el admin - usuario no se encuentra registrado',
                status:400
           });
        }

        // jwt
        const token = await generateJWT(user.id);



       // console.log(googleUser);
        res.status(200).json({
            msg: 'login google ok',
            user,
            token,
            status:200
       });
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'error 500 contactar con el administrador',
       });  
    }
}


module.exports = {
    login,
    googleSingIn
}