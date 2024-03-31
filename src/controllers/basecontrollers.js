const baseservice = require('../services/baseservice.js');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = {error:'', result:[]};

        try {
            let carros = await baseservice.buscarTodos();

            for(let i in carros) {
                json.result.push({
                    id: carros[i].id,
                    modelo: carros[i].modelo,
                    ano: carros[i].ano,
                    placa: carros[i].placa
                });
            }
        } catch(error) {
            json.error = 'Erro ao buscar carros';
        }

        res.json(json);
    },
    buscarUm: async (req, res) => { 
        let json = {error:'', result:{}};

        let id = req.params.id; 
        let carro = await baseservice.buscarUm(id);

        if(carro) { 
            json.result = carro;
        } 
        res.json(json);
    }
};
