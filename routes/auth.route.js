const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middleware/validate-fields');

const { rolValidate, emailValidate,UserExistById} = require('../helper/db-validation')


const {login ,googleSingIn} = require('../controller/auth.controller');


const router = Router();

router.post('/', [
    check('email', 'El email no es valido y es requerido').isEmail(),
    check('password', 'El password minimo 6 carcteres').isLength({ min: 6 }),
   
    //check('rol').custom(rolValidate),
   // check('email').custom(emailValidate),
    validateFields
],
login);



router.post('/google', [
    check('id_token', 'El token es requerido').notEmpty(),
    //check('rol').custom(rolValidate),
    //check('email').custom(emailValidate),
    validateFields
],
googleSingIn);



module.exports = router;