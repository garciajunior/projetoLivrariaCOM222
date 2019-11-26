import { Component, OnInit } from '@angular/core';
import { Customer } from '../shared/customers/customer';
import { Item } from '../shoppingcart/item.entity'
import { Orders } from '../shared/orders/orders'
import { Orderitems } from '../shared/orderitems/orderitems'
import { OrdersService } from '../shared/orders/orders.service'
import { OrderitemsService } from '../shared/orderitems/orderitems.service'
import { CustomersService } from '../shared/customers/customers.service'


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  private customerModel = new Customer();
  order: Orders;
  private lastInsert: number;
  orderitem: Orderitems;
  customerlist: Customer[] = [];

  constructor(private orderSvc: OrdersService,
    private custSvc: CustomersService,
    private ordItSvc: OrderitemsService) { }

  ngOnInit() {

  }

  insertOrder() {

    console.log("insertOrder");

    this.order = {
      custID: this.customerModel.custId,
      orderdate: new Date().toISOString().slice(0, 19).replace('T', ' ')
    }

    console.log(JSON.stringify(this.order));

    this.orderSvc.insertOrder(JSON.stringify(this.order)).subscribe(data => {
      this.lastInsert = Number(data);
      this.insertOrderItems(this.lastInsert);
    });
  }


  insertOrderItems(id) {
    let cart: any = JSON.parse(localStorage.getItem('cart'));
    for (var i = 0; i < cart.length; i++) {
      let item: Item = JSON.parse(cart[i]);

      this.orderitem = {
        ISBN: +item.product.ISBN,
        orderID: id,
        price: item.product.price,
        qty: item.quantity
      }

      this.ordItSvc.insertOrderItem(JSON.stringify(this.orderitem)).subscribe(r => { console.log("insertOrderItems"); })
    }
  }

  insertCustomer() {

    let index: number = 0;

    this.custSvc.getCustomer().subscribe(data => {
      this.customerlist = data;

      for (let i of this.customerlist) {
        if (this.customerModel.custId == i.custId) {
          console.log("usuario ja existe");
          index = 1;
        }
      }

      if (index == 0) {
        this.custSvc.insertCustomer(JSON.stringify(this.customerModel))
          .subscribe(r => { });
      }

    })
    this.insertOrder();
  }

}
