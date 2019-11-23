import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Util } from '../util'
import { Book } from './book'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAleatoryBooks() {
    return this.http.get<Array<Book>>(`${Util.API_URL}books/aleatory`)
  }

  getBookById(id: string) {
    return this.http.get<Book[]>(`${Util.API_URL}books/${id}`)       
  }

  getBookCategory(id: string) {
    return this.http.get<Array<Book>>(`${Util.API_URL}categories/${id}/books/`)
  }

  getBookSearch(query: string) {
    return this.http.get<Array<Book>>(`${Util.API_URL}books/search/${query}`)
  }
}
