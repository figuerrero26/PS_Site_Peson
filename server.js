// Lift & Shift: servir un sitio estático existente con Express 

 

const express = require('express'); 

const path = require('path'); 

 

const app = express(); 

const port = 8000; 

 

// Servir todos los archivos estáticos desde la carpeta "public" 

app.use(express.static(path.join(__dirname, 'Actividad'))); 

 

app.get('/', (req, res) => { 

  res.sendFile(path.join(__dirname, 'Actividad', 'index.html')); 

}); 

 

// Iniciar servidor 
app.listen(port, () => { 
    console.log(`Sitio levantado en http://localhost:${port}`);
  });