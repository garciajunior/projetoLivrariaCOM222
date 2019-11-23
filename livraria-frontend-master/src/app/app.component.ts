import { Component, OnInit } from '@angular/core';

import { Categories } from './shared/categories/categories'
import { CategoriesService } from './shared/categories/categories.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [  
    CategoriesService
  ]
})
export class AppComponent implements OnInit {

  categories: Array<Categories>

  constructor(
    private categoriesSvc: CategoriesService
  ) {}

  ngOnInit() {
    this.getCategories()
  }

  getCategories() {
    this.categoriesSvc.getCategories().subscribe(
      data => {
        this.categories = data
      },
      () => {
        alert('Não foi possível baixar categorias!')
      }
    )
  }

  getLink(categorie: Categories) {
    return `category/${categorie.CategoryID}`
  }
}
