const express = require('express');
const app = express();
const config = require('./config');
const vueElementAdminService = require('./service/vue-element-admin');

const port = config.port;
const apiPath = config.apiPath;

app.use(express.static('public'));
app.use(express.json());

app.use(`${apiPath}/vue-element-admin`, vueElementAdminService);

app.listen(port, () => console.log(`app listening on port ${port}!`));