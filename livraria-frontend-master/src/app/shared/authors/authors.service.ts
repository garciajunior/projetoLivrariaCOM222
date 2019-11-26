import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Util } from '../util'
import { Author } from './author'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http: HttpClient) { }

  getBookAuthors(id) {    
    return this.http.get<Author[]>(`${Util.API_URL}authors/books/${id}`)
  }

}
