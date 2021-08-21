const {Schema , model} = require('mongoose');

const CategorySchema = Schema({
    nombre:{
        type:String,
        required:[true,'el nombre es requerido'],
        unique:true,
    },
    estado:{
        type:Boolean,
        default:true
    },
    // refe al modelo user
    user: {
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
});


// remover atributos de un modelo de model
CategorySchema.methods.toJSON = function(){

    const { __v, estado,...data } = this.toObject();
    return data;
    
}




// singular name
module.exports =  model('Category',CategorySchema);
