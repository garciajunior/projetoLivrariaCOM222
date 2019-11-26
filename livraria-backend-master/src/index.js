const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

// Import de rotas
const routerCategories = require('./routes/categories')
const routerBooks = require('../src/routes/books')
const routerOrders = require('../src/routes/orders')
const routerOrdersItems = require('../src/routes/orderitems')
const routerAuthors = require('../src/routes/authors')
const routerCustomers = require('../src/routes/customers')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Apenas no desenvolvimento ==> CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
    next()
})

const router = express.Router()
router.get('/', (req, res) => {
    res.json('Go to CodeBooks!')
})

app.use('/', router)
app.use('/categories', routerCategories)
app.use('/books', routerBooks)
app.use('/orders', routerOrders)
app.use('/orderitems', routerOrdersItems)
app.use('/authors', routerAuthors)
app.use('/customers', routerCustomers)

app.listen(port)
console.log(`Listening in http://localhost:${port} 🚀️`)