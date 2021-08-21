
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const uploadFiles = (files, extValid = ['jpg', 'png', 'gif', 'jpeg'], folder='') => {

    return new Promise((resolve, reject) => {

        //sacar el archivo del req

        if (!files) {
          return reject(`Sin archivos Adjuntos`)
        }

        console.log(files);
        const { file } = files;

        // separar el nombre del archivo por punto(.)
        const cutFileName = file.name.split('.');

        // obtener la extension
        const ext = cutFileName[cutFileName.length - 1];

        // array de extensiones permitidas
        if (!extValid.includes(ext)) {
            return reject(`La extension ${ext} no esta permitida, pruebe con ${extValid}`)
        }

        // renombrar del archivo
        const nameTemp = uuidv4() + '.' + ext;
        // construir la ruta
        const uploadPath = path.join(__dirname + '/../uploads/' ,folder, nameTemp);

        // mover el archivo a la carpeta upload
        file.mv(uploadPath, (err) => {
            if (err) return reject(err);
            resolve(nameTemp)
        });

    });

}


module.exports = {
    uploadFiles
};