// const Rol = require('../models/rol.model');
// const User = require('../models/user.model');
// const Category = require('../models/category.model');

const {
    Rol,
    User,
    Category,
    Product
} = require('../models');


const rolValidate = async (rol)=>{

    //rol existe
    const rolExist = await Rol.findOne({rol});
    if (!rolExist) throw new Error(` El rol ${rol} no existe en la DB`);
}

const emailValidate = async (email)=>{

     //email existe
     const emailExist = await User.findOne({email});
     if (emailExist) throw new Error(` El correo ${email} ya existe en la DB`);
}


const UserExistById = async (id)=>{

    //user existe
    const userExist = await User.findById(id);
    return new Promise((resolve,reject) =>{
        if (!userExist) {
          reject(`El usuario con el id:${id} no existe en la DB`);
        }
        resolve(userExist);
    });
    //if (!userExist) throw new Error(` El usuario con el id:${id}  no existe en la DB`);
}


const CategoryExistById = async (id)=>{

    //category existe
    const categoryExist = await Category.findById(id);
    if (!categoryExist) throw new Error(`La categoria con el id:${id}  no existe en la DB`);

    //if (!categoryExist.estado) throw new Error(` La categoria con el id:${id}  ya fue eliminada en la DB`);
}



const ProductExistById = async (id)=>{

    //product existe
    const productExist = await Product.findById(id);
    return new Promise((resolve,reject) =>{
        if (!productExist) {
          reject(`El producto con el id:${id}  no existe en la DB`);
        }
        resolve(productExist);
    });

    //if (!productExist) throw new Error(`El producto con el id:${id}  no existe en la DB`);

}

const collectionValidate = (collection = '', collectionValid = [])=>{

    if (!collectionValid.includes(collection)) 
    throw new Error(`la coleccion :${collection}  no esta permitida, intentar con ${collectionValid}`);

    return true;

}



      


module.exports = {
    rolValidate,
    emailValidate,
    UserExistById,
    CategoryExistById,
    ProductExistById,
    collectionValidate
};