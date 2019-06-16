const express = require("express");
const router = express.Router();

//Ruta inicial.
router.get('/', (req , res) => {
    
    // res.sendFile(__dirname  + "/views/index.html"); //Cuando un usuario le pida al servidor una dirección / le devuelvo un archivo html.
    res.render("index.ejs",{title: "Servidor Nodejs"}); //Como trabajo con un motor de plantilals ejs lo tiene que renderizar a html.
    //Aca le estoy mandando al motor de plantillas una variable para que antes de renderizar la cargue en la vista de la web.
});
//Ruta de contacto.
router.get('/contact', (req , res) => {
    res.render("contact.ejs",{title: "Contact Page"}); //Como trabajo con un motor de plantilals ejs lo tiene que renderizar a html.
   });

//exporto la constante como un módulo.
module.exports = router;