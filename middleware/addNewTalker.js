const fs = require('fs/promises');
const talkerFile = require('./talkerJSON');

const addNewTalker = async (req, res) => {
  const { name, age, talk } = req.body;
  const talker = await talkerFile();

  const newTalker = {
    id: talker.length + 1,
    name,
    age,
    talk,
  };
  talker.push(newTalker);
  await fs.writeFile('./talker.json', JSON.stringify(talker));

  return res.status(201).json(newTalker);
};

module.exports = addNewTalker;