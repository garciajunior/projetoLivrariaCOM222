import { Component, OnInit, Input } from '@angular/core';

import { Book } from '../shared/books/book'

@Component({
  selector: 'app-livro-item',
  templateUrl: './livro-item.component.html',
  styleUrls: ['./livro-item.component.css']
})
export class LivroItemComponent implements OnInit {

  @Input() books: Array<Book> 

  constructor() { }

  ngOnInit() {
  }

  getURL(ISBN: string): string {
    return `https://baldochi.unifei.edu.br/COM222/trabfinal/imagens/${ISBN}.01.THUMBZZZ.jpg`
  }

  getResume(description: string) {
    return description
      .replace(/<.*?>/g, '')
      .substring(0, 300) + ' ...'
  }

}
