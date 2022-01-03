const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

const getTalker = require('./middleware/getTalker');
const getTalkerID = require('./middleware/getTalkerID');
const postLoginToken = require('./middleware/postLoginToken');
const emailValidate = require('./middleware/emailValidate');
const passwordValidate = require('./middleware/passwordValidate');

// requisito 1
app.get('/talker', getTalker);

// requisito 2
app.get('/talker/:id', getTalkerID);

// requisito 3
app.post('/login', postLoginToken, emailValidate, passwordValidate);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
