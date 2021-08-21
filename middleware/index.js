
const  validateJWT = require('../middleware/validate-jwt');
const  validateFields = require('../middleware/validate-fields');
const  validateRole = require('../middleware/validate-rol');
const  validateCategory = require('../middleware/validate-category');
const  validateFile = require('../middleware/validate-file');

module.exports = {
    ...validateJWT,
    ...validateFields,
    ...validateRole,
    ...validateCategory,
    ...validateFile
}