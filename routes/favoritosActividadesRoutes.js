const express = require('express');
const router = express.Router();
const favoritosActividadesController = require('../controllers/favoritosActividadesController');
const verifyToken = require('../middlewares/authMiddleware');

router.post('/', verifyToken, favoritosActividadesController.createFavoritoActividad);
router.get('/:id', verifyToken, favoritosActividadesController.getFavoritosActividades);
router.delete('/:id', verifyToken, favoritosActividadesController.deleteFavoritoActividad);

module.exports = router;
