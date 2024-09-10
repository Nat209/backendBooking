const db = require('../config/bdConfig.js');


const createFavoritoActividad = (req, res) => {
  const { ID_Usuario, ID_Actividad } = req.body;
  const query = 'INSERT INTO favoritos_actividades (ID_Usuario, ID_Actividad) VALUES (?, ?)';
  db.query(query, [ID_Usuario, ID_Actividad], (err, results) => {
    if (err) return res.status(500).send('Error en la base de datos');
    res.status(201).json({ id: results.insertId, ID_Usuario, ID_Actividad });
  });
};

const getFavoritosActividades = (req, res) => {
  const query = 'SELECT * FROM favoritos_actividades WHERE ID_Usuario = ?';
  db.query(query, [req.params.id], (err, results) => {
    if (err) return res.status(500).send('Error en la base de datos');
    res.json(results);
  });
};

const deleteFavoritoActividad = (req, res) => {
  const query = 'DELETE FROM favoritos_actividades WHERE ID_Favorito_Actividad = ?';
  db.query(query, [req.params.id], (err) => {
    if (err) return res.status(500).send('Error en la base de datos');
    res.send('Favorito de actividad eliminado');
  });
};

module.exports = {
  createFavoritoActividad,
  getFavoritosActividades,
  deleteFavoritoActividad
};
