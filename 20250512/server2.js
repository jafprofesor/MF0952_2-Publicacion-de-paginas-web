const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500);
            return res.end('Error cargando la página');
        }

        const html = data
            .replace('<%= nodeVersion %>', process.version)
            .replace('<%= serverDate %>', new Date().toLocaleString());

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(html);
    });
});

server.listen(3000, () => {
    console.log('Servidor listo en puerto 3000');
});
