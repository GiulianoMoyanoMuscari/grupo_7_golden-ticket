const express = require ('express');
const app = express();
const path = require ('path');

const PORT = 3000;

const pathPublic = path.join(__dirname, './public/');

// Definimos Rutas y Flujo Request-Response  //
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './views/home.html'))
});

// Dejamos Estaticos a los recursos de la carpeta Public //
app.use(express.static(pathPublic))

// Levantamos el Servidor //
app.listen(PORT, ()=> console.log(`Servidor funcionando en el puerto ${PORT}. http://localhost:3000/`));