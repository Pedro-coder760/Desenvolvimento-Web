const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Habilita o parser JSON

app.post('/submit', (req, res) => {
    const formData = req.body;

    // Aqui você pode processar os dados do formulário
    // como salvar em um banco de dados ou enviar um email

    console.log('Dados recebidos:', formData);

    res.send('Mensagem recebida com sucesso!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
