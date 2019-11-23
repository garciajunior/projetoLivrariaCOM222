import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { Book } from '../shared/books/book'
import { BookService } from '../shared/books/book.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [BookService]
})
export class SearchComponent implements OnInit {

  books: Array<Book>
  loading: boolean = false
  query: string

  constructor(
    private route: ActivatedRoute,
    private bookSvc: BookService
  ) { }

  ngOnInit() {
    this.loading = true
    this.route.paramMap.subscribe(
      param => {
        this.query = param.get('query')
        this.bookSvc.getBookSearch(this.query).subscribe(
          result => {
            this.books = result
            this.loading = false
          }
        )
      }
    )
  }

}
