import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../shared/books/book'
import { Author } from '../shared/authors/author'
import { BookService } from '../shared/books/book.service'
import { AuthorsService } from '../shared/authors/authors.service'


@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {
  private book: Book;
  private authors: Author[];



  constructor(private bookSvc: BookService,
    private autSvc: AuthorsService,
    private activatedRoute: ActivatedRoute, ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];

      if (id) {
        //busca na api o Id
        this.bookSvc.getBookById(id).subscribe(data => {
          this.book = data[0];
          if(this.book){
            this.getAuthorbyID(id);
          }
        })
      }
    })
  }

  getAuthorbyID(id){
    this.autSvc.getBookAuthors(id).subscribe(data => {
      this.authors = data;
    })
  }

  getAuthors() {

    let authorstring: string;

    if (this.authors.length == 1) {
      return this.authors[0].nameF + " " + this.authors[0].nameL;
    }

    authorstring = this.authors[0].nameF + " " + this.authors[0].nameL;

    for (let i = 0; i < this.authors.length; i++) {
      authorstring += ", " + this.authors[i].nameF + " " + this.authors[i].nameL;
    }

    return authorstring;

  }

  getResume(description: string) {
    //   return description
    //     // .replace(/<.*?>/g, '')
    //     .substring(0, 200) 
    //     + description.substring (200,3000) + `</span>`
    // }
    return this.book.description;
  }


  getURL(ISBN: string): string {
    return `https://baldochi.unifei.edu.br/COM222/trabfinal/imagens/${ISBN}.01.MZZZZZZZ.jpg`
  }

  getLarge(ISBN: string) {
    window.open(`https://baldochi.unifei.edu.br/COM222/trabfinal/imagens/${ISBN}.01.LZZZZZZZ.jpg`, "_blank")
  }


}
