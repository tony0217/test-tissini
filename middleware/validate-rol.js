const { response, request } = require('express');

const validateAdminRole = (req =request, res =response , next) => {


    if( !req.userAuth ){
        return res.status(500).json({
            msg: 'se quiere verificar el role sin validar el token primero'
        });
    }


    const { rol, nombre } = req.userAuth;

    if( rol !=='ADMIN_ROLE'){
        return res.status(401).json({
            msg: `El usuario  ${nombre} no es admin - no tiene permisos`
        });
    }

    next();
}



const validateHasRole = (...roles) => {


    return (req = request, res = response , next) => {

        if( !req.userAuth ){
            return res.status(500).json({
                msg: 'se quiere verificar el role sin validar el token primero'
            });
        }
    
        if( !roles.includes(req.userAuth.rol)){
            return res.status(401).json({
                msg: `No tiene permisos. Debe tener rol de ${roles}`
            });
        }
    
        next();
    }

}


module.exports = {validateAdminRole,validateHasRole};