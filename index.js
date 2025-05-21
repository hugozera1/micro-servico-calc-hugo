const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/calcular', (req, res) => {
  const n1 = parseFloat(req.query.n1);
  const n2 = parseFloat(req.query.n2);

  if (isNaN(n1) || isNaN(n2)) {
    return res.status(400).json({ erro: 'Parâmetros inválidos' });
  }

  const resultado = n1 + n2;
  res.json({ resultado });
});

app.listen(3001, () => {
  console.log('Microserviço de soma rodando na porta 3001');
});