const http = require('http');

// Configuración básica del servidor
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>¡Bienvenido a la Intranet de JJJ Consultores Empresariales!</h1>');
});

// Escucha en el puerto 3000 o el que Azure asigne automáticamente
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
