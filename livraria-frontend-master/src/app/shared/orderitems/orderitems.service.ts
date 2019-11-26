import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Util } from '../util'
import { Orderitems } from './orderitems'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class OrderitemsService {

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<Array<Orderitems>>(`${Util.API_URL}orderitems/`)
  }

  insertOrderItem(order: string){
    return this.http.post(`${Util.API_URL}orderitems/`, order, httpOptions);
  }

  /*
  addHero (hero: Hero): Observable<Hero> {
  return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
    .pipe(
      catchError(this.handleError('addHero', hero))
    );
}
*/
}
