const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000; // Use a porta fornecida pelo ambiente do Vercel ou 3000 como padrão

// Configuração do body-parser para análise de dados do formulário
app.use(bodyParser.urlencoded({ extended: true }));

// Servir arquivos estáticos no diretório 'public'
app.use(express.static('public'));

// Rota para exibir o formulário
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'form.html'));
});

// Rota para processar os dados do formulário
app.post('/submit', (req, res) => {
  const formData = req.body;
  console.log('Dados do formulário recebidos:', formData);
  res.sendFile(path.join(__dirname, 'views', 'success.html'));
});

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
