const talkerFile = require('./talkerJSON');

const getTalker = async (_req, res, _next) => {
  const dataTalkerFile = await talkerFile();

  return res.status(200).json(dataTalkerFile);
};

module.exports = getTalker;
