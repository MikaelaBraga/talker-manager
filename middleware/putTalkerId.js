const fs = require('fs/promises');
const talkerFile = require('./talkerJSON');

const editTalkerId = async (req, res) => {
  const { name, age, talk } = req.body;
  const { watchedAt, rate } = talk;
  const { id } = req.params;
  const talker = await talkerFile();

  const editTalker = { id: parseInt(id, 10), name, age, talk: { watchedAt, rate } };

  // retirado do site https://www.ti-enxame.com/pt/javascript/
  const objIndex = talker.findIndex((obj) => obj.id === parseInt(id, 10)); // encontrar o obj no array com o mesmo id da url
  talker[objIndex] = { ...editTalker };

  await fs.writeFile('./talker.json', JSON.stringify(talker));
  
  return res.status(200).json(editTalker);
};

module.exports = editTalkerId;