const db = require('../../config/db')

const controllerCategories = {
    async getCategories(res) {
        const categories = await db('bookcategories')
            .orderBy('CategoryName', 'asc')
        res.json(categories)
    },

    async getCategory(id, res) {
        const category = await db('bookcategories')
            .where({
                CategoryID: id
            })
        res.json(category)
    },

    async getBooksOfCategory(id, res) {
        const books = await db('bookdescriptions')
            .join('bookcategoriesbooks', 'bookdescriptions.ISBN', 'bookcategoriesbooks.ISBN')
            .where({
                CategoryID: id
            })
        res.json(books)
    }
}

module.exports = controllerCategories