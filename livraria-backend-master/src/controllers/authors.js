const db = require('../../config/db')

const controllerAuthors = {
    async getAuthorsOfBook(id, res) {
   
            const authors = await db('bookauthors')
                .join(
                    'bookauthorsbooks',
                    'bookauthors.AuthorID',
                    'bookauthorsbooks.AuthorID'
                )
                .where({
                    ISBN: id
                })
           
    },
    async getBooksOfAuthor(id, res) {
        const books = await db('bookdescriptions')
            .join(
                'bookauthorsbooks',
                'bookdescriptions.ISBN',
                'bookauthorsbooks.ISBN'
            )
            .where({
                AuthorID: id
            })
        res.json(books);
    }
}

module.exports = controllerAuthors