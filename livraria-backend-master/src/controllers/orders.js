const db = require('../../config/db')

const controllerOrders = {
    async getOrders(res) {
        const order = await db('bookorders')
        res.json(order)
    },

    async insertOrder(custId, Orderdate, res) {
        if(await db('bookorders')
            .insert([{ custID: custId, orderdate: Orderdate }])){
                res.send("Sucess")
            } // {}{}para varios insert     
    },

    async getOrderbByCustId(id, res) {
        const order = await db('bookorders')
            .where({ custID: id })
        res.json(order)
    }
}

module.exports = controllerOrders

