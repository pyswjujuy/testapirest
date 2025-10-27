// Importamos express
const express = require('express');

// Creamos la app
const app = express();

// Definimos una ruta GET
app.get('/', (req, res) => {
  res.json({ mensaje: 'Hola HIA 9500!!!' });
});

// Iniciamos el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en http://localhost:${PORT}`);
});
