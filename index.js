const express = require('express');
const bodyParser = require('body-parser');

const getTalker = require('./middleware/getTalker');
const getTalkerID = require('./middleware/getTalkerID');
const postLoginToken = require('./middleware/postLoginToken');
const emailValidate = require('./middleware/emailValidate');
const passwordValidate = require('./middleware/passwordValidate');
const addNewTalker = require('./middleware/addNewTalker');
const {
  tolkenAuthorization,
  nameAuthorization,
  ageAuthorization,
  talkAuthorization,
  watchedAndRateAuthorization } = require('./middleware/postTalkerAuthorization');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

  // não remova esse endpoint, e para o avaliador funcionar
  app.get('/', (_request, response) => {
    response.status(HTTP_OK_STATUS).send();
  });
  
  // requisito 1
  app.get('/talker', getTalker);
  
  // requisito 2
  app.get('/talker/:id', getTalkerID);
  
  // requisito 3
  app.post('/login', emailValidate, passwordValidate, postLoginToken);
  
  // requisito 4
  app.post('/talker',
  tolkenAuthorization,
  nameAuthorization,
  ageAuthorization,
  talkAuthorization,
  watchedAndRateAuthorization,
  addNewTalker);

app.listen(PORT, () => {
  console.log('Online');
});
