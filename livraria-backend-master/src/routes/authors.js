const express = require('express')
const router = express.Router()
const controller = require('../controllers/authors')

// Rota para autores de um livro
router.get('/books/:id?', (req, res) => {
    controller.getAuthorsOfBook(req.params.id, res)
})

// Rota para livros de um autor
router.get('/:id?/books', (req, res) => {
    controller.getBooksOfAuthor(req.params.id, res)
})

module.exports = router