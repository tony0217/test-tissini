const { Router } = require('express');
const { check } = require('express-validator');

// middelware
const {
    validateJWT,
    validateFields,
    validateAdminRole,
    validateHasRole
} = require('../middleware');

const { rolValidate, emailValidate, UserExistById } = require('../helper/db-validation')


const
    {
        getUser,
        postUser,
        putUser,
        deleteUser,
        patchUser
    } = require('../controller/user.controller');




const router = Router();

router.get('/', getUser);

router.post('/', [
    check('nombre', 'El nombre es un campo obligatorio').notEmpty(),
    check('email', 'El email no es valido y es requerido').isEmail(),
    check('password', 'El password minimo 6 carcteres').isLength({ min: 6 }),
    //check('rol','El email no es valido y es requerido').isIn(['ADMIN_ROLE','USER_ROLE']),
    //check('rol').custom( (rol)=>rolValidate(rol)),
    //check('rol').custom(rolValidate),
    check('email').custom(emailValidate),
    validateFields
],
    postUser);

router.put('/:id', [
    check('id', 'No es un ID Valido').isMongoId(),
    check('id').custom(UserExistById),
    check('rol').custom(rolValidate),
    validateFields
], putUser);

router.delete('/:id', [
    validateJWT,
    //validateAdminRole,
    validateHasRole('VACA_ROLE', 'WAKAMOLE_ROLE'),
    check('id', 'No es un ID Valido').isMongoId(),
    check('id').custom(UserExistById),
    validateFields
], deleteUser);

router.patch('/', patchUser);



module.exports = router;