const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs/promises');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

const talkerFile = 'talker.json';

app.get('/talker', async (_req, res, _next) => {
  const dataTalkerFile = await fs.readFile(talkerFile, 'utf8');
  const dataTalkerFileJSON = JSON.parse(dataTalkerFile);

  return res.status(200).json(dataTalkerFileJSON);
});

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
