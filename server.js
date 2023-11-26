const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/processar-formulario', (req, res) => {
   const { nome, email, idade } = req.body;

   // Validação simples no servidor
   if (!nome || !email || !idade) {
      return res.status(400).send('Por favor, preencha todos os campos.');
   }

   // Você pode realizar validações mais complexas conforme necessário

   res.status(200).send(`Cadastro realizado com sucesso!<br>Nome: ${nome}<br>Email: ${email}<br>Idade: ${idade}`);
});

app.listen(port, () => {
   console.log(`Servidor rodando em http://localhost:${port}`);
});
