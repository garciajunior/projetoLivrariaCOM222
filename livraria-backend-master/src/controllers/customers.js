const db = require('../../config/db')

const controllerCustomers = {

    async insertCustomer(custId, nameF, nameL, Email, rua, cidade, estado, zip, res) {
        if (await db('bookcustomers')
            .insert([{
                custID: custId,
                fname: nameF,
                lname: nameL,
                email: Email,
                street: rua,
                city: cidade,
                state: estado,
                zip: zip
            }])) {
        }
    },

    async getCustomers(res) {
        const order = await db('bookcustomers').select({
            custId: 'custID' 
        })
        res.json(order)
    }
}

module.exports = controllerCustomers