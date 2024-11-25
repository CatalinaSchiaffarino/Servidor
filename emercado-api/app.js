const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');  // Importamos el middleware CORS
const app = express();
const puerto = 3000;

// Configurar CORS: Permite que cualquier origen haga peticiones (esto es para desarrollo)
app.use(cors());

// Ruta para devolver el archivo buy.json de la carpeta cart
app.get('/api/cart/buy', (req, res) => {
  const filePath = path.join(__dirname, 'cart', 'buy.json'); // Ruta al archivo buy.json
  console.log('Leyendo archivo en:', filePath);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo buy.json:', err);
      return res.status(500).json({ error: 'Error al leer el archivo buy.json', details: err });
    }
    res.json(JSON.parse(data)); // Devuelve los datos del archivo JSON
  });
});

// Ruta para devolver el archivo cat.json de la carpeta cats
app.get('/api/cats/cat', (req, res) => {
  const filePath = path.join(__dirname, 'cats', 'cat.json'); // Ruta al archivo cat.json
  console.log('Leyendo archivo en:', filePath);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo cat.json:', err);
      return res.status(500).json({ error: 'Error al leer el archivo cat.json', details: err });
    }
    res.json(JSON.parse(data)); // Devuelve los datos del archivo JSON
  });
});

// Ruta para devolver todos los archivos JSON dentro de la carpeta cats_products
app.get('/api/cats_products', (req, res) => {
  const folderPath = path.join(__dirname, 'cats_products'); // Ruta a la carpeta cats_products
  console.log('Leyendo archivos en la carpeta:', folderPath);

  // Leemos los archivos de la carpeta
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error('Error al leer la carpeta cats_products:', err);
      return res.status(500).json({ error: 'Error al leer la carpeta cats_products', details: err });
    }

    // Filtramos solo los archivos .json
    const jsonFiles = files.filter(file => path.extname(file) === '.json');
    
    // Leemos todos los archivos JSON y los devolvemos como una respuesta
    const jsonData = [];
    jsonFiles.forEach(file => {
      const filePath = path.join(folderPath, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      try {
        jsonData.push(JSON.parse(fileContent)); // Parseamos el contenido JSON y lo agregamos al arreglo
      } catch (parseErr) {
        console.error(`Error al parsear el archivo ${file}:`, parseErr);
      }
    });

    res.json(jsonData); // Devolvemos los datos de todos los JSONs leídos
  });
});


app.get('/api/node_modules', (req, res) => {
  const folderPath = path.join(__dirname, 'node_modules'); // Ruta a la carpeta node_modules
  console.log('Leyendo archivos en la carpeta node_modules:', folderPath);

  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error('Error al leer la carpeta node_modules:', err);
      return res.status(500).json({ error: 'Error al leer la carpeta node_modules', details: err });
    }

    // Filtramos solo los archivos .json
    const jsonFiles = files.filter(file => path.extname(file) === '.json');
    
    // Leemos todos los archivos JSON y los devolvemos como una respuesta
    const jsonData = [];
    jsonFiles.forEach(file => {
      const filePath = path.join(folderPath, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      try {
        jsonData.push(JSON.parse(fileContent)); // Parseamos el contenido JSON y lo agregamos al arreglo
      } catch (parseErr) {
        console.error(`Error al parsear el archivo ${file}:`, parseErr);
      }
    });

    res.json(jsonData); // Devolvemos los datos de todos los JSONs leídos
  });
});

// Ruta para devolver todos los archivos JSON dentro de la carpeta products
app.get('/api/products', (req, res) => {
  const folderPath = path.join(__dirname, 'products'); // Ruta a la carpeta products
  console.log('Leyendo archivos en la carpeta products:', folderPath);

  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error('Error al leer la carpeta products:', err);
      return res.status(500).json({ error: 'Error al leer la carpeta products', details: err });
    }

    // Filtramos solo los archivos .json
    const jsonFiles = files.filter(file => path.extname(file) === '.json');
    
    // Leemos todos los archivos JSON y los devolvemos como una respuesta
    const jsonData = [];
    jsonFiles.forEach(file => {
      const filePath = path.join(folderPath, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      try {
        jsonData.push(JSON.parse(fileContent)); // Parseamos el contenido JSON y lo agregamos al arreglo
      } catch (parseErr) {
        console.error(`Error al parsear el archivo ${file}:`, parseErr);
      }
    });

    res.json(jsonData); // Devolvemos los datos de todos los JSONs leídos
  });
});

// Ruta para devolver todos los archivos JSON dentro de la carpeta products_comments
app.get('/api/products_comments', (req, res) => {
  const folderPath = path.join(__dirname, 'products_comments'); // Ruta a la carpeta products_comments
  console.log('Leyendo archivos en la carpeta products_comments:', folderPath);

  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error('Error al leer la carpeta products_comments:', err);
      return res.status(500).json({ error: 'Error al leer la carpeta products_comments', details: err });
    }

    // Filtramos solo los archivos .json
    const jsonFiles = files.filter(file => path.extname(file) === '.json');
    
    // Leemos todos los archivos JSON y los devolvemos como una respuesta
    const jsonData = [];
    jsonFiles.forEach(file => {
      const filePath = path.join(folderPath, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      try {
        jsonData.push(JSON.parse(fileContent)); // Parseamos el contenido JSON y lo agregamos al arreglo
      } catch (parseErr) {
        console.error(`Error al parsear el archivo ${file}:`, parseErr);
      }
    });

    res.json(jsonData); // Devolvemos los datos de todos los JSONs leídos
  });
});

// Ruta para devolver todos los archivos JSON dentro de la carpeta sell
app.get('/api/sell', (req, res) => {
  const folderPath = path.join(__dirname, 'sell'); // Ruta a la carpeta sell
  console.log('Leyendo archivos en la carpeta sell:', folderPath);

  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error('Error al leer la carpeta sell:', err);
      return res.status(500).json({ error: 'Error al leer la carpeta sell', details: err });
    }

    // Filtramos solo los archivos .json
    const jsonFiles = files.filter(file => path.extname(file) === '.json');
    
    // Leemos todos los archivos JSON y los devolvemos como una respuesta
    const jsonData = [];
    jsonFiles.forEach(file => {
      const filePath = path.join(folderPath, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      try {
        jsonData.push(JSON.parse(fileContent)); // Parseamos el contenido JSON y lo agregamos al arreglo
      } catch (parseErr) {
        console.error(`Error al parsear el archivo ${file}:`, parseErr);
      }
    });

    res.json(jsonData); // Devolvemos los datos de todos los JSONs leídos
  });
});

// Ruta para devolver todos los archivos JSON dentro de la carpeta user_cart
app.get('/api/user_cart', (req, res) => {
  const folderPath = path.join(__dirname, 'user_cart'); // Ruta a la carpeta user_cart
  console.log('Leyendo archivos en la carpeta user_cart:', folderPath);

  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error('Error al leer la carpeta user_cart:', err);
      return res.status(500).json({ error: 'Error al leer la carpeta user_cart', details: err });
    }

    // Filtramos solo los archivos .json
    const jsonFiles = files.filter(file => path.extname(file) === '.json');
    
    // Leemos todos los archivos JSON y los devolvemos como una respuesta
    const jsonData = [];
    jsonFiles.forEach(file => {
      const filePath = path.join(folderPath, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      try {
        jsonData.push(JSON.parse(fileContent)); // Parseamos el contenido JSON y lo agregamos al arreglo
      } catch (parseErr) {
        console.error(`Error al parsear el archivo ${file}:`, parseErr);
      }
    });

    res.json(jsonData); // Devolvemos los datos de todos los JSONs leídos
  });
});

// Inicia el servidor en el puerto 3000
app.listen(puerto, () => {
  console.log(`Servidor corriendo en http://localhost:${puerto}`);
});



