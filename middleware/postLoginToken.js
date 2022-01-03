// retirado do site: https://www.ti-enxame.com/pt/javascript/crie-um-token-aleatorio-em-javascript-com-base-nos-detalhes-do-usuario/941136694/
const generateToken = () => {
  const rand = () => Math.random().toString(36).substr(2);
  const token = (rand() + rand()).substr(0, 16);
  
  return token;
};

const token = (_req, res) => res.status(200).json({ token: generateToken() });

module.exports = token;
