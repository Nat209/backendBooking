const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Importar rutas
const favoritosActividadesRoutes = require('./routes/favoritosActividadesRoutes');
const favoritosHotelesRoutes = require('./routes/favoritosHotelesRoutes');
const reservaRoutes = require('./routes/reservaRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const authRoutes = require('./routes/authRoutes');

// Usar rutas;
app.use('/api/favoritos_actividades', favoritosActividadesRoutes);
app.use('/api/favoritos_hoteles', favoritosHotelesRoutes);
app.use('/api/reserva', reservaRoutes);
app.use('/api/usuario', usuarioRoutes);
app.use('/api/auth', authRoutes);

// Iniciar servidor en puerto 3000
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
