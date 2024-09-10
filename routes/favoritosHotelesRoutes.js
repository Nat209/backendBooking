const express = require('express');
const router = express.Router();
const favoritosHotelesController = require('../controllers/favoritosHotelesController');
const verifyToken = require('../middlewares/authMiddleware');

router.post('/', verifyToken, favoritosHotelesController.createFavoritoHotel);
router.get('/:id', verifyToken, favoritosHotelesController.getFavoritosHoteles);
router.delete('/:id', verifyToken, favoritosHotelesController.deleteFavoritoHotel);

module.exports = router;
