import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { Book } from '../shared/books/book'
import { BookService } from '../shared/books/book.service'

import { Categories } from '../shared/categories/categories'
import { CategoriesService } from '../shared/categories/categories.service'

@Component({
  selector: 'app-category-books',
  templateUrl: './category-books.component.html',
  styleUrls: ['./category-books.component.css'],
  providers: [
    BookService,
    CategoriesService
  ]
})
export class CategoryBooksComponent implements OnInit {

  category: Categories = new Categories();
  books: Array<Book>
  loading: boolean = false
  id: string

  constructor(
    private bookSvc: BookService,
    private categorySvc: CategoriesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      param => {
        this.id = param.get('id')
        this.getBooks()
        this.getCategory()
      }
    )
  }

  getBooks() {
    this.loading = true
    this.bookSvc.getBookCategory(this.id).subscribe(
      data => {
        this.books = data
        this.loading = false
      }, () => {
        alert('Não foi possível obter lista de livros, tente novamente mais tarde.')
        this.loading = false
      }
    )
  }

  getCategory() {
    this.loading = true
    this.categorySvc.getCategory(this.id).subscribe(
      data => {
        this.category = data[0]
        this.loading = false
      }, () => {
        alert('Não foi possível obter categoria, tente novamente mais tarde.')
        this.loading = false
      }
    )
  }

  getCategoryName() {
    return this.category.CategoryName ? this.category.CategoryName : ''
  }
}
