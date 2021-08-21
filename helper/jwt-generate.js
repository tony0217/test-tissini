const jwt = require('jsonwebtoken');


const generateJWT = (uid = '' )=>{

    return new Promise((resolve, reject) =>{

        var payload = {uid} 

        jwt.sign(
            payload,
            process.env.PRIVATEKEY,
            { expiresIn: '2h' }, 
            (err, token)=>(err) ? console.log(err)+reject('No se pudo Generar Token',err) : resolve( token)
        );

    });


  


}


module.exports = { generateJWT}

