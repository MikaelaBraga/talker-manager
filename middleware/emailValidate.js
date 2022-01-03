const emailValidate = (req, res, next) => {
  const { email } = req.body;
  const regexEmail = /\S+@\S+\.\S+/; // retirado do site horadecodar.com.br
 
  if (!email) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }

  if (!regexEmail.test(email)) {
    return res.status(400).json({
      message: 'O "email" deve ter o formato "email@email.com"',
    });
  }
  next();
};

module.exports = emailValidate;