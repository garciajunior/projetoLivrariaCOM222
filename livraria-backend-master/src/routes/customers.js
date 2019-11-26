const express = require('express')
const router = express.Router()
const controller = require('../controllers/customers')

router.post('/', (req, res) => {
    console.log("body: " + req.body);
    controller.insertCustomer(
        req.body.custId,
        req.body.nameF,
        req.body.nameL,
        req.body.Email,
        req.body.rua,
        req.body.cidade,
        req.body.estado,
        req.body.zip,
        res)

})

router.get('/', (req, res) => {
    controller.getCustomers(res);
})

module.exports = router