const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors')
const DIR_PUBLIC = express.static('public');

const { dbConenection } = require('../db/config')


class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
     

        this.patch = {
            auth:'/api/auth',
            search: '/api/search',
            category:'/api/category',
            product: '/api/product',
            user: '/api/user',
            uploads: '/api/uploads',
        }


        // conexion dbConenection
        this.conectionDB()

        //middlewares
        this.middlewares();


        //rutas app
        this.route();
       
    }

    async conectionDB(){
        await dbConenection();
    }


    middlewares(){

        //cors
        this.app.use(cors());

        // parse body
        this.app.use( express.json() );

        // traer carptas estaticas
        this.app.use(DIR_PUBLIC);

             // files upload
        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/',
            createParentPath:true
       }));
    
    }

    route(){

       //rutas auth
       this.app.use(this.patch.auth, require('../routes/auth.route'));

       //rutas busqueda - search
       this.app.use(this.patch.search, require('../routes/search.route'));
       
       //rutas category
       this.app.use(this.patch.category, require('../routes/category.route'));

       //rutas product
       this.app.use(this.patch.product, require('../routes/product.route'));

       // rutas user
       this.app.use(this.patch.user, require('../routes/user.route'));

        // rutas uploads
       this.app.use(this.patch.uploads, require('../routes/uploads.route'));

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening at http://localhost:${this.port}`)
        });
    }



}


module.exports = Server;