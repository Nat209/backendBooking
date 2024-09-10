const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../config/bdConfig.js');

// Función para login

const generateToken = (user) => {
    return jwt.sign({ id: user.ID_Usuario, nombre: user.nombre }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
  };

  
const login = (req, res) => {
  const { correo, contrasena } = req.body;
  const query = 'SELECT * FROM usuario WHERE correo = ? AND contrasena = ?';
  db.query(query, [correo, contrasena], (err, results) => {
    if (err) {
      return res.status(500).send('Error en la base de datos');
    }
    if (results.length > 0) {
      const user = results[0];
      const token = generateToken(user);
      res.json({ token, user });
    } else {
      res.status(401).send('Credenciales incorrectas');
    }
  });

};

// Función para logout
const logout = (req, res) => {
  // En este caso, el logout no tiene una implementación directa en el backend
  // Simplemente se debe eliminar el token en el frontend
  res.send('Logout exitoso');
};

module.exports = {
  login,
  logout
};
