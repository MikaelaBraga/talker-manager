const fs = require('fs/promises');

const talkerFile = 'talker.json';

const talkerFileJSON = async () => {
  const dataTalkerFile = await fs.readFile(talkerFile, 'utf8');
  return JSON.parse(dataTalkerFile);
};

module.exports = talkerFileJSON;
