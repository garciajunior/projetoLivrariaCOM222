const express = require('express')
const router = express.Router()
const controller = require('../controllers/categories')

// Rota para consultar todos as categorias
router.get('/', (req, res) => {
    controller.getCategories(res)
})

// Rota para consultar uma categoria
router.get('/:id?', (req, res) => {
    req.params.id ? id = req.params.id : null
    if (!id) {
        res.sendStatus(400)
        return
    }
    controller.getCategory(id, res)
})

// Rota para consultar lista de livros da categoria
router.get('/:id?/books', (req, res) => {
    req.params.id ? id = req.params.id : null
    if (!id) {
        res.sendStatus(400)
        return
    }
    controller.getBooksOfCategory(id, res)
})

module.exports = router