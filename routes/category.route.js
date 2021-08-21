const { Router } = require('express');
const { check } = require('express-validator');

// middelware
const {
    validateJWT,
    validateFields,
    validateAdminRole,
    validateHasRole
} = require('../middleware');


const { CategoryExistById } = require('../helper/db-validation');

const
    {
        getCategory,
        getCategoryById,
        postCategory,
        putCategory,
        deleteCategory
    } = require('../controller/category.controller');





const router = Router();

router.get('/', getCategory);


router.get('/:id', [
    check('id', 'No es un ID Valido').isMongoId(),
    check('id').custom(CategoryExistById),
    validateFields
]
,getCategoryById);


router.post('/',[
    validateJWT,
    check('nombre','el nombre es obligatorio').notEmpty(),
    validateFields
] ,postCategory);


router.put('/:id', 
    validateJWT,
    validateHasRole('ADMIN_ROLE', 'USER_ROLE'),
    check('id', 'No es un ID Valido').isMongoId(),
    check('id').custom(CategoryExistById),
    check('nombre','el nombre es obligatorio').notEmpty(),
    validateFields
,putCategory);


router.delete('/:id',[
    validateJWT,
    validateAdminRole,
    check('id', 'No es un ID Valido').isMongoId(),
    check('id').custom(CategoryExistById),
    validateFields
] ,deleteCategory);





module.exports = router;