app.post('/processar-formulario', (req, res) => {
    const { nome, email, idade } = req.body;
 
    // Validação simples no servidor
    if (!nome || !email || !idade) {
       return res.status(400).sendFile(path.join(__dirname, 'public', 'index.html'));
    }
 
    // Simulação de cadastro bem-sucedido
    // Substitua esta parte com a lógica real de cadastro no seu banco de dados
    const cadastroBemSucedido = true;
 
    if (cadastroBemSucedido) {
       // Status 200 indicando sucesso
       return res.status(200).sendFile(path.join(__dirname, 'public', 'resultado.html'));
    } else {
       // Status 400 indicando erro
       return res.status(400).sendFile(path.join(__dirname, 'public', 'resultado.html'));
    }
 });
 