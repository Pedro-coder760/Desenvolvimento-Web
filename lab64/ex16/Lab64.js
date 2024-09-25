const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/api') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        const data = {
            nome: "Servidor Node.js",
            linguagem: "JavaScript",
            uso: "Desenvolvimento Web"
        };
        res.end(JSON.stringify(data));
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Rota não encontrada');
    }
});

if (req.method === 'POST' && req.url === '/submit') {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end(`Dados recebidos: ${body}`);
    });
} else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Rota não encontrada');
}


    if (req.method === 'POST' && req.url === '/upload') {
        let fileData = '';
        req.on('data', chunk => {
            fileData += chunk.toString();
        });
        req.on('end', () => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.end('Upload simulado com sucesso!');
        });
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Rota não encontrada');
    }

server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});