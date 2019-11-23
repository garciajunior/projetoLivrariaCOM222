const db = require('../../config/db')

const controllerBooks = {
    async getAleatoryBooks(res) {
        const aleatoryBooks = await db('bookdescriptions')
            .orderByRaw('RAND()')
            .limit(4)
        res.json(aleatoryBooks)
    },

    async getBookById(id, res) {
        const book = await db('bookdescriptions')
        .where({ISBN: id})
        res.json(book);
    },
    async getBooksOfSearch(query, res) {
        const books = await db('bookdescriptions')
            .where('title', 'LIKE', `%${query}%`)
        res.json(books)
    }
}

module.exports = controllerBooks