const tolkenAuthorization = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: 'Token não encontrado',
    });
  }

  if (authorization.length !== 16) {
    return res.status(401).json({
      message: 'Token inválido',
    });
  }
  next();
};

const nameAuthorization = (req, res, next) => {
  const { name } = req.body;

  if (!name || name.length === 0) {
    return res.status(400).json({
      message: 'O campo "name" é obrigatório',
    });
  }
  
  if (name.length < 3) {
    return res.status(400).json({
      message: 'O "name" deve ter pelo menos 3 caracteres',
    });
  }
  next();
};

const ageAuthorization = (req, res, next) => {
  const { age } = req.body;

  if (!age) {
    return res.status(400).json({
      message: 'O campo "age" é obrigatório',
    });
  }

  if (parseInt(age, 10) < 18) {
    return res.status(400).json({
      message: 'A pessoa palestrante deve ser maior de idade',
    });
  }
  next();
};

const talkAuthorization = (req, res, next) => {
  const { talk } = req.body;

  if (!talk || talk.watchedAt === ' ' || talk.rate === ' ') {
    return res.status(400).json({
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    });
  }
  next();
};

const watchedAndRateAuthorization = (req, res, next) => {
  const { talk: { watchedAt, rate } } = req.body;
  const validateDate = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/; // pego no site guj.com.br

  if (!validateDate.test(watchedAt)) {
    return res.status(400).json({
      message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    });
  }

  if (rate > 5 || rate === 0) {
    return res.status(400).json({
      message: 'O campo "rate" deve ser um inteiro de 1 a 5',
    });
  }
  next();
};

module.exports = {
  tolkenAuthorization,
  nameAuthorization,
  ageAuthorization,
  talkAuthorization,
  watchedAndRateAuthorization,
};
