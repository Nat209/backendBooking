const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/reservaController');
const verifyToken = require('../middlewares/authMiddleware');

router.post('/', verifyToken, reservaController.createReserva);
router.get('/:id', verifyToken, reservaController.getReserva);
router.put('/:id', verifyToken, reservaController.updateReserva);
router.delete('/:id', verifyToken, reservaController.deleteReserva);

module.exports = router;
