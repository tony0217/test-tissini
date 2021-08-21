
const  dbValidation = require('./db-validation');
const  googleVerify = require('./google-verify');
const  jwtGenerate = require('./jwt-generate');
const  uploadFiles = require('./upload-files');


module.exports = {
    ...dbValidation,
    ...googleVerify,
    ...jwtGenerate,
    ...uploadFiles
}