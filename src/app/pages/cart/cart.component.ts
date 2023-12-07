import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/Models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart : Cart = {items : [{
    product : 'https://via.placeholder.com/150',
    name : 'snickers',
    price : 150,
    quantity : 1,
    id : 1
  }]};

  dataSource : Array<CartItem> = [];
  displayedColumns : Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ];

  constructor(){}

  ngOnInit(){
    this.dataSource = this.cart.items;
  }

  getTotal(items: CartItem[]): number {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
  }
}
