const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const database = require('./modules/database');
const routes = require('./routes');
const port = 3000;

database.init();

app.use(bodyParser.json());

app.use(routes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
