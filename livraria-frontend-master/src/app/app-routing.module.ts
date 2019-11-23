import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { CategoryBooksComponent } from './category-books/category-books.component'
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component'
import { BookdetailsComponent } from './bookdetails/bookdetails.component'
import { SearchComponent } from './search/search.component'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'category/:id', component: CategoryBooksComponent },
  { path: 'cart', component: ShoppingcartComponent },
  { path: 'bookdetails', component: BookdetailsComponent },
  { path: 'search/:query', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
