const db = require('../config/bdConfig.js');


const createReserva = (req, res) => {
  const { fecha, ID_Usuario, ID_Hotel } = req.body;
  const query = 'INSERT INTO reserva (fecha, ID_Usuario, ID_Hotel) VALUES (?, ?, ?)';
  db.query(query, [fecha, ID_Usuario, ID_Hotel], (err, results) => {
    if (err) return res.status(500).send('Error en la base de datos');
    res.status(201).json({ id: results.insertId, fecha, ID_Usuario, ID_Hotel });
  });
};

const getReserva = (req, res) => {
  const query = 'SELECT * FROM reserva WHERE ID_Reserva = ?';
  db.query(query, [req.params.id], (err, results) => {
    if (err) return res.status(500).send('Error en la base de datos');
    if (results.length > 0) {
      res.json(results[0]);
    } else {
      res.status(404).send('Reserva no encontrada');
    }
  });
};

const updateReserva = (req, res) => {
  const { fecha, ID_Usuario, ID_Hotel } = req.body;
  const query = 'UPDATE reserva SET fecha = ?, ID_Usuario = ?, ID_Hotel = ? WHERE ID_Reserva = ?';
  db.query(query, [fecha, ID_Usuario, ID_Hotel, req.params.id], (err) => {
    if (err) return res.status(500).send('Error en la base de datos');
    res.send('Reserva actualizada');
  });
};

const deleteReserva = (req, res) => {
  const query = 'DELETE FROM reserva WHERE ID_Reserva = ?';
  db.query(query, [req.params.id], (err) => {
    if (err) return res.status(500).send('Error en la base de datos');
    res.send('Reserva eliminada');
  });
};

module.exports = {
  createReserva,
  getReserva,
  updateReserva,
  deleteReserva
};
