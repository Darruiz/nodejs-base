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
    }, 
    inserir: (modelo, ano, placa) => {
        return new Promise((resolve, reject) => { 
            const query = 'INSERT INTO carros SET modelo = ?, ano = ?, placa = ?';
            db.query(query, [modelo, ano, placa], (error, results) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(results.insertId);
            });
        });
    }, 
    alterar: (id, campos) => {
        return new Promise((resolve, reject) => { 
            let queryPartes = [];
            let valores = [];
            
            // Construir a consulta SQL dinamicamente
            Object.keys(campos).forEach(campo => {
                if (["modelo", "ano", "placa"].includes(campo)) { // Garantir que apenas campos válidos sejam considerados
                    queryPartes.push(`${campo} = ?`);
                    valores.push(campos[campo]);
                }
            });
            
            if (queryPartes.length > 0) {
                const query = `UPDATE carros SET ${queryPartes.join(', ')} WHERE id = ?`;
                valores.push(id);
                
                db.query(query, valores, (error, results) => {
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(results);
                });
            } else {
                reject(new Error("Nenhum campo válido para atualizar"));
            }
        });
    }, 
    excluir: (id) => {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM carros WHERE id = ?', [id], (error, results) => {
                if(error) {
                    reject(error);
                    return;
                }
                resolve(results);
            });
        });
    }
};