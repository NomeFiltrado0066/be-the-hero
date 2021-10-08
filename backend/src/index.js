
/*
Métodos HTTP

- GET: Buscar/listar um informação no back-end
- POST: Criar uma informação no back-end
- PUT: Alterar uma informação no back-end
- DELETE: Deletar uma informação no back-end
*/


/*
Tipos de parametros

- Query: Paramentros nomeados enviados na rota após o símbulo "?" 
         geralmente servem para: filtros, páginação.
- Route: Paramentros ultilizados para identificar recursos
- Request Body: Corpo da requisção utilizado para criar/alterar recursos
*/

const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);