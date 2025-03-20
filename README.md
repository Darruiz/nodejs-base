# nodejs-base
# Express.js
# API node.js crud básico
Config básica: 

npm init -y
 npm install express mysql dotenv cors body-parser
npm install nodemon --save-dev


Fundamentos: 

.env é um arquivo de configuração armazena configurações do sistema, porta de conexão com servidor etc, crie a PORT={numero da porta fora da chave} PORT=3000 exemplo

O cors permite trabalharmos como API e ter acesso a recursos de outro site mesmo estando em dominios diferentes 

O body-parser é um modulo capaz de converter o body em uma requisição para varios outros formatos


controllers fica codigo e regra de negocios 
regra de banco de dados fica no service
