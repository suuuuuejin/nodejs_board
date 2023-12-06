const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

//요청이 오면 위에서부터 순서대로 찾음(그러므로 더 구체적인 라우트가 위에 있어야 함) 
router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.post('/cart-delete-item', shopController.postCartDeleteProduct);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;
