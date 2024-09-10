const db = require('../config/bdConfig.js');


const createHotel = (req, res) => {
  const { nombre, ubicacion, categoria, precio } = req.body;
  const query = 'INSERT INTO hotel (nombre, ubicacion, categoria, precio) VALUES (?, ?, ?, ?)';
  db.query(query, [nombre, ubicacion, categoria, precio], (err, results) => {
    if (err) return res.status(500).send('Error en la base de datos');
    res.status(201).json({ id: results.insertId, nombre, ubicacion, categoria, precio });
  });
};

const getHotel = (req, res) => {
  const query = 'SELECT * FROM hotel WHERE ID_Hotel = ?';
  db.query(query, [req.params.id], (err, results) => {
    if (err) return res.status(500).send('Error en la base de datos');
    if (results.length > 0) {
      res.json(results[0]);
    } else {
      res.status(404).send('Hotel no encontrado');
    }
  });
};

const updateHotel = (req, res) => {
  const { nombre, ubicacion, categoria, precio } = req.body;
  const query = 'UPDATE hotel SET nombre = ?, ubicacion = ?, categoria = ?, precio = ? WHERE ID_Hotel = ?';
  db.query(query, [nombre, ubicacion, categoria, precio, req.params.id], (err) => {
    if (err) return res.status(500).send('Error en la base de datos');
    res.send('Hotel actualizado');
  });
};

const deleteHotel = (req, res) => {
  const query = 'DELETE FROM hotel WHERE ID_Hotel = ?';
  db.query(query, [req.params.id], (err) => {
    if (err) return res.status(500).send('Error en la base de datos');
    res.send('Hotel eliminado');
  });
};

module.exports = {
  createHotel,
  getHotel,
  updateHotel,
  deleteHotel
};
