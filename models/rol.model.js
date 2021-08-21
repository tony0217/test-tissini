const {Schema , model} = require('mongoose');

const RolSchema = Schema({
    rol:{
        type:String,
        required:[true,'el rol es requerido']
    }
});


// singular name
module.exports =  model('Rol',RolSchema);
