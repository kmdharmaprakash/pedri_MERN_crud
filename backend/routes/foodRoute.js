const express = require('express');
const router = express.Router();
const FoodController = require('../controllers/foodController');

router.post('/add', FoodController.add);
router.get('/list', FoodController.list);
router.put('/update', FoodController.update);
router.delete('/delete/:id', FoodController.destroy);

module.exports = router;