const fs = require('fs/promises');
const getTalker = require('./getTalker');

const addNewTalker = async (req, res) => {
  const { name, age, talk } = req.body;
  const talkerFile = await getTalker();

  const newTalker = {
    id: talkerFile.length + 1,
    name,
    age,
    talk,
  };
  talkerFile.push(newTalker);
  await fs.writeFile('./talker.json', JSON.stringify(talkerFile));

  return res.status(201).json(newTalker);
};

module.exports = addNewTalker;