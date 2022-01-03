const talkerFile = require('./talkerJSON');

const getTalkerID = async (req, res) => {
  const { id } = req.params;
  const dataTalkerFile = await talkerFile();

  const verifySpeakerId = dataTalkerFile.find((speaker) => speaker.id === parseInt(id, 10));

  if (!verifySpeakerId) {
    return res.status(404).send({ message: 'Pessoa palestrante não encontrada' });
  }

  return res.status(200).json(verifySpeakerId);
};

module.exports = getTalkerID;
