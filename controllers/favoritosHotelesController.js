const db = require('../config/bdConfig.js');


const createFavoritoHotel = (req, res) => {
  const { ID_Usuario, ID_Hotel } = req.body;
  const query = 'INSERT INTO favoritos_hoteles (ID_Usuario, ID_Hotel) VALUES (?, ?)';
  db.query(query, [ID_Usuario, ID_Hotel], (err, results) => {
    if (err) return res.status(500).send('Error en la base de datos');
    res.status(201).json({ id: results.insertId, ID_Usuario, ID_Hotel });
  });
};

const getFavoritosHoteles = (req, res) => {
  const query = 'SELECT * FROM favoritos_hoteles WHERE ID_Usuario = ?';
  db.query(query, [req.params.id], (err, results) => {
    if (err) return res.status(500).send('Error en la base de datos');
    res.json(results);
  });
};

const deleteFavoritoHotel = (req, res) => {
  const query = 'DELETE FROM favoritos_hoteles WHERE ID_Favorito_Hotel = ?';
  db.query(query, [req.params.id], (err) => {
    if (err) return res.status(500).send('Error en la base de datos');
    res.send('Favorito de hotel eliminado');
  });
};

module.exports = {
  createFavoritoHotel,
  getFavoritosHoteles,
  deleteFavoritoHotel
};
