const { Router } = require('express');
const { check } = require('express-validator');

// middelware
const {
    validateJWT,
    validateFields,
    validateAdminRole,
    validateHasRole,
    validateFile
} = require('../middleware');

const { collectionValidate } = require('../helper/db-validation');


const {getUpload,postUpload, putUpload,getUploadCloudinary,putUploadCloudinary} = require('../controller/uploads.controller');




const router = Router();


router.get('/:collection/:id',[
    check('id', 'No es un ID Valido').isMongoId(),
    check('collection').custom( c => collectionValidate(c,['user','product'])),
    validateFields
] ,getUploadCloudinary);


router.post('/',validateFile ,postUpload);


router.put('/:collection/:id',[
   // validateJWT,
    check('id', 'No es un ID Valido').isMongoId(),
    validateFile,
    check('collection').custom( c => collectionValidate(c,['user','product'])),
    validateFields
],putUploadCloudinary);

module.exports = router;