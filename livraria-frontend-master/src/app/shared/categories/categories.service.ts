import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Util } from '../util'
import { Categories } from './categories'

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<Array<Categories>>(`${Util.API_URL}categories/`)
  }

  getCategory(id: string) {
    return this.http.get<Categories>(`${Util.API_URL}categories/${id}`)
  }
}
