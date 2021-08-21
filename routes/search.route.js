const { Router } = require('express');
const { check } = require('express-validator');

// middelware
const {
    validateJWT,
    validateFields,
    validateAdminRole,
    validateHasRole
} = require('../middleware');

const { search } = require('../controller/search.controller');
const router = Router();



router.get('/', search);
router.get('/:collection/:arg', search);


module.exports = router;