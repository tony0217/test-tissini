const {Schema , model} = require('mongoose');

const UserSchema = Schema({

    nombre:{
        type:String,
        required:[true,'el nombre es requerido']
    },
    
    email:{
        type:String,
        required:[true,'el email es requerido'],
        unique:true
    },
    
    password:{
        type:String,
        required:[true,'la contraseña es requerida']
    },
    
    img:{
        type:String
    },
    
    rol:{
        type:String,
        required:true,
        default:'USER_ROLE'
        //enum:['ADMIN_ROLE','USER_ROLE']
    },

    estado:{
        type:Boolean,
        default:true
    },

    google:{
        type:Boolean,
        default:false
    }
    
});

// remover atributos de un modelo de model
UserSchema.methods.toJSON = function(){

    const { __v, password,_id,...user } = this.toObject();
    user.uid = _id;
    return user;
}




// singular name
module.exports =  model('User',UserSchema);
