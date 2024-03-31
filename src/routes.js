const express = require('express'); 
const router = express.Router(); 

const carrocontroller = require('./controllers/basecontrollers.js'); 

router.get('/carros', carrocontroller.buscarTodos);
router.get('/carro/:id', carrocontroller.buscarUm);
router.post('/carro/', carrocontroller.inserir);
router.put('/carro/:id', carrocontroller.alterar);

module.exports = router;
