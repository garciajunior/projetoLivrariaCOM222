const express = require('express')
const router = express.Router()
const controller = require('../controllers/orderitems')

router.get('/', (req, res) => {
    controller.getOrderItems(res)
})

router.get('/:id?', (req, res) => {
    controller.getOrderItemsByOrderId(req.params.id, res)
})

router.post('/', (req, res) => {
    controller.insertOrderItem(req.body.orderId, req.body.isbn, 
        req.body.quant, req.body.price, res)
})

module.exports = router