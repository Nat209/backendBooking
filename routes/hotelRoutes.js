const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotelController');
const verifyToken = require('../middlewares/authMiddleware');

router.post('/', verifyToken, hotelController.createHotel);
router.get('/:id', verifyToken, hotelController.getHotel);
router.put('/:id', verifyToken, hotelController.updateHotel);
router.delete('/:id', verifyToken, hotelController.deleteHotel);

module.exports = router;
