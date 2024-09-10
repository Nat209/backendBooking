const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const verifyToken = require('../middlewares/authMiddleware');

router.post('/', usuarioController.createUsuario);
router.get('/:id', verifyToken, usuarioController.getUsuario);
router.put('/:id', verifyToken, usuarioController.updateUsuario);
router.delete('/:id', verifyToken, usuarioController.deleteUsuario);

module.exports = router;
