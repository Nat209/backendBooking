const db = require('../config/bdConfig.js');

const createActividad = (req, res) => {
  const { nombre, ubicacion, tipo, precio } = req.body;
  const query = 'INSERT INTO actividad (nombre, ubicacion, tipo, precio) VALUES (?, ?, ?, ?)';
  db.query(query, [nombre, ubicacion, tipo, precio], (err, results) => {
    if (err) return res.status(500).send('Error en la base de datos');
    res.status(201).json({ id: results.insertId, nombre, ubicacion, tipo, precio });
  });
};

const getActividad = (req, res) => {
  const query = 'SELECT * FROM actividad WHERE ID_Actividad = ?';
  db.query(query, [req.params.id], (err, results) => {
    if (err) return res.status(500).send('Error en la base de datos');
    if (results.length > 0) {
      res.json(results[0]);
    } else {
      res.status(404).send('Actividad no encontrada');
    }
  });
};

const updateActividad = (req, res) => {
  const { nombre, ubicacion, tipo, precio } = req.body;
  const query = 'UPDATE actividad SET nombre = ?, ubicacion = ?, tipo = ?, precio = ? WHERE ID_Actividad = ?';
  db.query(query, [nombre, ubicacion, tipo, precio, req.params.id], (err) => {
    if (err) return res.status(500).send('Error en la base de datos');
    res.send('Actividad actualizada');
  });
};

const deleteActividad = (req, res) => {
  const query = 'DELETE FROM actividad WHERE ID_Actividad = ?';
  db.query(query, [req.params.id], (err) => {
    if (err) return res.status(500).send('Error en la base de datos');
    res.send('Actividad eliminada');
  });
};

module.exports = {
  createActividad,
  getActividad,
  updateActividad,
  deleteActividad
};
