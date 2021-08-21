const path = require('path');
const fs = require('fs');

const {User,Product } = require('../models');
const { response, request } = require('express');
const { uploadFiles ,UserExistById,ProductExistById } = require('../helper');

const cloudinary = require('cloudinary').v2
cloudinary.config(process.env.CLOUDINARY_URL);


const
    existByCollection = {
        user: UserExistById,
        product: ProductExistById,
    },
    defaultExistByCollection = 'por favor añadir nuevas colecciones';
;

const getUpload = async (req, res = response) => {

    const { collection, id} = req.params;
    // console.log(collection, id);
    try {

         // buscar por collecion si existById
         const existById = existByCollection[collection] || res.status(500).json({msg:defaultExistByCollection});
 
         // retorna el modelo si existe
         const model = await existById(id);
         console.log(collection,'result--->',model);
 
         // limpiar imagenes previas
         if(model.img){
            const pathImg = path.join(__dirname, '../uploads/',collection,model.img);
            if(fs.existsSync(pathImg)) return res.sendFile(pathImg);
         }


      
        const pathImg = path.join(__dirname,'../assests/','no-image.jpg');
        if(fs.existsSync(pathImg)) return res.sendFile(pathImg);
  


      
 
        
    } catch (error) {
        console.log('error--->',error);
       return res.status(500).json({msg:error});
    }
 

}



const postUpload = async (req, res = response) => {

       
        // nota: para hacer que el error salga en res, se debe añadir el try catch para el reject de la promise
        try {

            //const nombreFile = await uploadFiles(req.files,['txt','pdf'],'texts');
            const nombreFile = await uploadFiles(req.files,undefined,'img');
            return res.status(200).json({nombreFile});

        } catch (error) {

            return res.status(400).json({
                error
            });
        }
}

const putUpload = async (req, res = response) => {

    const { collection, id} = req.params;
   // console.log(collection, id);
   try {

        // buscar por collecion si existById
        const existById = existByCollection[collection] || res.status(500).json({msg:defaultExistByCollection});

        // retorna el modelo si existe
        const model = await existById(id);
        console.log(collection,'result--->',model);

        // limpiar imagenes previas
        if(model.img){
            const pathImg = path.join(__dirname, '../uploads/',collection,model.img);
            if(fs.existsSync(pathImg)) fs.unlinkSync(pathImg);
        }

        // tomamos el nombre del archivo y se lo añadimos a la propiedad img del modelo y se crea carp de collection
        const nombreFile = await uploadFiles(req.files,undefined,collection);
        model.img = nombreFile;
        await model.save();

        return res.status(201).json(model);

       
   } catch (error) {
       console.log('error--->',error);
      return res.status(500).json({msg:error});
   }

}


const getUploadCloudinary = async (req, res = response) => {

    const { collection, id} = req.params;
    // console.log(collection, id);
    try {

         // buscar por collecion si existById
         const existById = existByCollection[collection] || res.status(500).json({msg:defaultExistByCollection});
 
         // retorna el modelo si existe
         const model = await existById(id);
         console.log(collection,'result--->',model);
 
         // redireccionar las imagenes de cloudinary
        if(model.img) return res.json({url_img:model.img});
         

        const pathImg = path.join(__dirname,'../assests/','no-image.jpg');
        if(fs.existsSync(pathImg)) return res.sendFile(pathImg);
  
        
    } catch (error) {
        console.log('error--->',error);
       return res.status(500).json({msg:error});
    }
 

}



const putUploadCloudinary = async (req, res = response) => {

    const { collection, id} = req.params;
   // console.log(collection, id);
   try {

        // buscar por collecion si existById
        const existById = existByCollection[collection] || res.status(500).json({msg:defaultExistByCollection});

        // retorna el modelo si existe
        const model = await existById(id);
        console.log(collection,'result--->',model);

        // limpiar imagenes en cloudinary
        if(model.img){

            // obtener el id del cloudinary
            const nameCut = model.img.split('/');
            const name = nameCut[nameCut.length - 1];
            const [public_id] = name.split('.');

            // eliminar imagen de cloudinary
            cloudinary.uploader.destroy(public_id);
            
        }

        // obtener el tempFilePath del file 
        const {tempFilePath} = req.files.file;
        //subir a cloudinary
        const {secure_url} = await cloudinary.uploader.upload(tempFilePath,{folder: collection });

        // tomamos el url de cloudinary y lo guardamos en el modelo
        model.img = secure_url;
        await model.save();

        return res.status(201).json(model);

   } catch (error) {
       console.log('error--->',error);
      return res.status(500).json({msg:error});
   }

}




module.exports = {
    getUpload,
    postUpload,
    putUpload,
    getUploadCloudinary,
    putUploadCloudinary
}

