const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obter os dados do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Criar um objeto com os dados
    const formData = {
        name: name,
        email: email,
        message: message
    };

    // Enviar os dados para o servidor (usando fetch ou AJAX)
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        // Lidar com a resposta do servidor
        if (response.ok) {
            // Exibir uma mensagem de sucesso
            alert('Mensagem enviada com sucesso!');
            // Limpar o formulário
            form.reset();
        } else {
            // Exibir uma mensagem de erro
            alert('Erro ao enviar a mensagem. Por favor, tente novamente.');
        }
    })
    .catch(error => {
        // Lidar com erros de rede
        console.error('Erro de rede:', error);
        alert('Erro ao enviar a mensagem. Por favor, verifique sua conexão.');
    });
});
