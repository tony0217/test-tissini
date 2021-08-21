const { Router } = require('express');
const { check } = require('express-validator');

// middelware
const {
    validateJWT,
    validateFields,
    validateAdminRole,
    validateHasRole,
    validateCategory
} = require('../middleware');


const { ProductExistById } = require('../helper/db-validation');

const
    {
        getProduct,
        getProductById,
        postProduct,
        putProduct,
        deleteProduct
    } = require('../controller/product.controller');





const router = Router();

router.get('/', getProduct);


router.get('/:id', [
    check('id', 'No es un ID Valido').isMongoId(),
    validateFields,
    check('id').custom(ProductExistById),
    validateFields
]
,getProductById);


router.post('/',[
   validateJWT,
   check('nombre','el nombre es obligatorio').notEmpty(),
   check('category','el nombre es obligatorio').notEmpty(),
   validateCategory,
   validateFields
] ,postProduct);


router.put('/:id', 
    validateJWT,
    validateHasRole('ADMIN_ROLE', 'USER_ROLE'),
    check('id', 'No es un ID Valido').isMongoId(),
    validateFields,
    check('id').custom(ProductExistById),
    check('nombre','el nombre es obligatorio').notEmpty(),
    validateCategory,
    validateFields
,putProduct);


router.delete('/:id',[
    validateJWT,
    validateAdminRole,
    check('id', 'No es un ID Valido').isMongoId(),
    check('id').custom(ProductExistById),
    validateFields
] ,deleteProduct);



module.exports = router;