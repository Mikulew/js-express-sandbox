const express = require('express');
const app = express();
const port = 3000;

app.get('/name/:user_name', function (request, response) {
  response.status(200);
  response.set('Content-Type', 'text/html');
  response.end('<html><body><h1>Witaj, ' + request.params.user_name + '</h1></body></html>');
});

app.get('/', function(request, response) {
  response.send('Witaj, świecie!');
});

app.listen(port, function() {
  console.log(`Serwer został uruchomiony, w przeglądarce internetowej przejdź pod adres: http://localhost:${port}`);
});