import { Component, OnInit } from '@angular/core';

import { Book } from '../shared/books/book'
import { BookService } from '../shared/books/book.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    BookService
  ]
})
export class HomeComponent implements OnInit {

  books: Array<Book>
  loading: boolean = false

  constructor(private bookSvc: BookService) { }

  ngOnInit() {
    this.getBooks()
  }

  getBooks() {
    this.loading = true
    this.bookSvc.getAleatoryBooks().subscribe(
      data => {
        this.books = data
        this.loading = false
      }, () => {
        alert('Não foi possível obter lista de livros, tente novamente mais tarde.')
        this.loading = false
      }
    )
  }

}
