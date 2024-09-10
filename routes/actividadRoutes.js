const express = require('express');
const router = express.Router();
const actividadController = require('../controllers/actividadController');
const verifyToken = require('../middlewares/authMiddleware');

router.post('/', verifyToken, actividadController.createActividad);
router.get('/:id', verifyToken, actividadController.getActividad);
router.put('/:id', verifyToken, actividadController.updateActividad);
router.delete('/:id', verifyToken, actividadController.deleteActividad);

module.exports = router;
