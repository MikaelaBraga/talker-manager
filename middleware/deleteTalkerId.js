const fs = require('fs/promises');
const talkerFile = require('./talkerJSON');

const deleteTalkerId = async (req, res) => {
  const { id } = req.params;
  const talker = await talkerFile();

  const deleteTalker = talker;

  const objIndex = talker.findIndex((obj) => obj.id === parseInt(id, 10));
  deleteTalker.splice(objIndex, 1);

  await fs.writeFile('./talker.json', JSON.stringify(deleteTalker));

  return res.status(200).json({ message: 'Pessoa palestrante deletada com sucesso' });
};

module.exports = deleteTalkerId;
