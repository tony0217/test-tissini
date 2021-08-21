const {Schema , model} = require('mongoose');

const ProductSchema = Schema({
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
    },

    prices: {
        type:Number,
        default:0
    },

    category:{
        type:Schema.Types.ObjectId,
        ref:'Category',
        required:true
    },
    description:{
        type:String
    },
    stock: {
        type:Boolean,
        default:true
    },
    img:{
        type:String
    },

});


// remover atributos de un modelo de model
 ProductSchema.methods.toJSON = function(){

    const { __v, estado,...data } = this.toObject();
    return data;
    
}


// singular name
module.exports =  model('Product',ProductSchema);
