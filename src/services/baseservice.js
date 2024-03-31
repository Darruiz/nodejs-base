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
    buscarUm: (id) => {
        return new Promise((resolve, reject) => { 
            db.query('SELECT * FROM carros WHERE id = ?', [id], (error, results) => {
                if(error) { reject(error); return; }
                if(results.length > 0) {
                    resolve(results[0]); 
                } else {
                    resolve(false);
                }
            });
        });
    }
};
