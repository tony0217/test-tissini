
const  validateJWT = require('../middleware/validate-jwt');
const  validateFields = require('../middleware/validate-fields');
const  validateRole = require('../middleware/validate-rol');

module.exports = {
    ...validateJWT,
    ...validateFields,
    ...validateRole,
}