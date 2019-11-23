const db = require('../../config/db')

const controllerOrderItems = {
    async getOrderItems(res) {
        const order = await db('bookorderitems')
        res.json(order)
    },

    async insertOrderItem(orderId, isbn, quant, price, res) {
        if (await db('bookorderitems')
            .insert([{ orderID: orderId, ISBN: isbn, qty: quant, price: price }])){
                res.send("Sucess")
            }
    },

    async getOrderItemsByOrderId(orderid, res) {
        const order = await db('bookorderitems')
            .where({ orderID: orderid })
        res.json(order)
    },
}

module.exports = controllerOrderItems