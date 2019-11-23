import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from '../shared/books/book'
import { Item } from '../shoppingcart/item.entity'
import { BookService } from '../shared/books/book.service'
import { OrdersService } from '../shared/orders/orders.service'

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  private items: Item[] = [];
  private total: number = 0;

  constructor(private bookSvc: BookService,
    private OrdersSvc: OrdersService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    //pega id do item clicado
    this.activatedRoute.params.subscribe(params => {
      var id = params['id'];
      if (id) {
        //busca na api o Id
        this.bookSvc.getBookById(id).subscribe(data => {
          //cria um item com quantidade e o objeto recuperado
          var item: Item = {
            product: data[0],
            quantity: 1
          };
          //persiste objeto localmente
          if (localStorage.getItem('cart') == null) {
            let cart: any = [];
            cart.push(JSON.stringify(item));
            localStorage.setItem('cart', JSON.stringify(cart));
          } else {
            //recupera objeto persistido
            let cart: any = JSON.parse(localStorage.getItem('cart'));
            let index: number = -1;
            //verifica se isbn ja existe
            for (var i = 0; i < cart.length; i++) {
              let item: Item = JSON.parse(cart[i]);
              if (item.product.ISBN == id) {
                index = i;
                break;
              }
            }
            //se nao existir adiciona novo
            if (index == -1) {
              cart.push(JSON.stringify(item));
              localStorage.setItem('cart', JSON.stringify(cart));
            } else {
              //senao soma quantidade
              let item: Item = JSON.parse(cart[index]);
              item.quantity += 1;
              cart[index] = JSON.stringify(item);
              localStorage.setItem("cart", JSON.stringify(cart));
            }
          }
          this.loadCart();
        }
        )
      }else{
        this.loadCart();
      }
    })
  }

  loadCart(){
    this.total = 0;
		this.items = [];
		let cart = JSON.parse(localStorage.getItem('cart'));
		for (var i = 0; i < cart.length; i++) {
			let item = JSON.parse(cart[i]);
			this.items.push({
				product: item.product,
				quantity: item.quantity
      });
      console.log(this.items);
      
			this.total += item.product.price * item.quantity;
		}
  }

  add(id: string): void{

  }

  remove(id: string): void {
		let cart: any = JSON.parse(localStorage.getItem('cart'));
		let index: number = -1;
		for (var i = 0; i < cart.length; i++) {
			let item: Item = JSON.parse(cart[i]);
			if (item.product.ISBN == id) {
				cart.splice(i, 1);
				break;
			}
		}
		localStorage.setItem("cart", JSON.stringify(cart));
		this.loadCart();
  }
  
  clearcart(){
    localStorage.clear();
    for (var i = 0; i < this.items.length; i++){
       this.items.slice(i);
    }
    this.loadCart();
  }

}

