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
    },
    inserir: async (req, res) => { 
        let json = {error:'', result:{}};
        
        let modelo = req.body.modelo; 
        let placa = req.body.placa; 
        let ano = req.body.ano;
        
        if(modelo && placa && ano) { 
            try {
                let carroId = await baseservice.inserir(modelo, ano, placa); 
                json.result = { 
                    id: carroId, 
                    modelo, 
                    ano, 
                    placa
                };
            } catch(error) {
                json.error = 'Erro ao inserir o carro';
            }
        } else { 
            json.error = 'Campos não enviados'; 
        }
        res.json(json);
    }, 
    alterar: async (req, res) => { 
        let json = {error:'', result:{}};
        let id = req.params.id;
        let campos = req.body; // Usando o objeto completo do corpo da requisição

        if(id && Object.keys(campos).length > 0) { // Verifica se o ID e pelo menos um campo para alterar foram fornecidos
            try {
                let resultado = await baseservice.alterar(id, campos); 
                if(resultado.affectedRows > 0) {
                    json.result = "Carro atualizado com sucesso.";
                } else {
                    json.error = "Não foi possível atualizar o carro.";
                }
            } catch(error) {
                json.error = 'Erro ao atualizar o carro.';
            }
        } else { 
            json.error = 'Campos não enviados ou ID ausente.'; 
        }
        res.json(json);
    }, 
    excluir: async (req, res) => { 
        let json = {error:'', result:{}};
        try {
            const results = await baseservice.excluir(req.params.id);
            if (results.affectedRows > 0) {
                json.result = "Carro excluído com sucesso.";
            } else {
                json.error = "Nenhum carro foi excluído.";
            }
        } catch(error) {
            json.error = "Erro ao excluir o carro.";
        }
        res.json(json); 
    }
};
