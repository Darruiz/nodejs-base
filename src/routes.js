const express = require('express'); 
const router = express.Router(); 

// Aqui, você importou o módulo como `carrocontroller`...
const carrocontroller = require('./controllers/basecontrollers.js'); 

// ...mas você deve usá-lo aqui, não `basecontroller`
router.get('/carros', carrocontroller.buscarTodos); 

module.exports = router;
