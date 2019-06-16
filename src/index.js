const express = require('express');
const server = express();

//Setting: Seteo el puerto de escucha del servidor
server.set('port',3000);
server.set('views engine','ejs')   //Uso un motor de plantillas "ejs" que sirve para programar variables, bucles en html.
server.set('views',(__dirname + "/views")); //Seteo la dirección de la carpeta views para que la pueda encontrar node.
server.set('assets',(__dirname + "/assets")); //Seteo la dirección de la carpeta assets para que la pueda encontrar node.
//Middelwares

//Statics
server.use(express.static(__dirname + '/assets')); //Los archivos estáticos se encuentran dentro de esta carpeta.

//Routes: rutas 
server.use(require('./routes/index'));

server.listen(server.get('port'), () => {
    console.log("Server listening on port", server.get('port'));
});
