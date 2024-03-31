const db = require('../db.js');

module.exports = {
    buscarTodos: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM carros', (error, results) => {
                if(error) { reject(error); return; }
                resolve(results);
            });
        });
    }, 
    buscarUM: (id) => { 
        return new Promise((aceitp,rejeitado)=> { 
            db.query('SELE * FROM carros WHERE id = ?', [id], (error, results)=> { 
                if(error) { reject(error); return; } 
                if(results.length > 0) { 
                    aceito(reults[0]); 
                } else { 
                    aceito(false);
                } 
            });
        });
    }
};
