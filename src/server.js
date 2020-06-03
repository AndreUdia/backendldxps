const express = require('express');
const routes = require('./routes');

require('./database');  // Com isso o banco fica ativo para os Models

const app =  express();

app.use(express.json());
app.use(routes);

app.listen(3333);