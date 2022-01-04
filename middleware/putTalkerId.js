const fs = require('fs/promises');
const talkerFile = require('./talkerJSON');

const editTalkerId = async (req, res, next) => {
  const { name, age, talk } = req.body;
  const { id } = req.params;
  const talker = await talkerFile();

  const editTalker = {
    id,
    name,
    age,
    talk,
  };
};

module.exports = editTalkerId;