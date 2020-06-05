const express = require('express');
const routes = require('./routes');
const cors = require('cors');

require('./database');  // Com isso o banco fica ativo para os Models

const app =  express();
app.use(cors())

app.use(express.json());
app.use(routes);

app.listen(3333);