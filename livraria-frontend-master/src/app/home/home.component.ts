import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

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
  query: string = ''

  constructor(private bookSvc: BookService,
    private router: Router) { }

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

  toSearch() {
    this.router.navigate([`search/${this.query}`])
    this.query = ''
  }

}
