const db = require('../config/bdConfig.js');


const createUsuario = (req, res) => {
  const { nombre, correo, contrasena } = req.body;
  const query = 'INSERT INTO usuario (nombre, correo, contrasena) VALUES (?, ?, ?)';
  db.query(query, [nombre, correo, contrasena], (err, results) => {
    if (err) return res.status(500).send('Error en la base de datos');
    res.status(201).json({ id: results.insertId, nombre, correo, contrasena });
  });
};

const getUsuario = (req, res) => {
  const query = 'SELECT * FROM usuario WHERE ID_Usuario = ?';
  db.query(query, [req.params.id], (err, results) => {
    if (err) return res.status(500).send('Error en la base de datos');
    if (results.length > 0) {
      res.json(results[0]);
    } else {
      res.status(404).send('Usuario no encontrado');
    }
  });
};

const updateUsuario = (req, res) => {
  const { nombre, correo, contrasena } = req.body;
  const query = 'UPDATE usuario SET nombre = ?, correo = ?, contrasena = ? WHERE ID_Usuario = ?';
  db.query(query, [nombre, correo, contrasena, req.params.id], (err) => {
    if (err) return res.status(500).send('Error en la base de datos');
    res.send('Usuario actualizado');
  });
};

const deleteUsuario = (req, res) => {
  const query = 'DELETE FROM usuario WHERE ID_Usuario = ?';
  db.query(query, [req.params.id], (err) => {
    if (err) return res.status(500).send('Error en la base de datos');
    res.send('Usuario eliminado');
  });
};

module.exports = {
  createUsuario,
  getUsuario,
  updateUsuario,
  deleteUsuario
};
