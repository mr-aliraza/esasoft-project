import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {
  cartList: Array<any> = [];
  cartCurrency: any = '';


  constructor(private cartService: CartService) {
    this.cartList = this.cartService.cartList;
    this.cartCurrency = this.cartService.cartCurrency;
  }

  ngOnInit(): void {
  }

  /* Change total price of single item */
  changeTotalPriceItem(cartItemId, event, price, arrayIndex: number) {
    const quantity = event.target.value;
    this.cartService.cartList[arrayIndex].quantity = quantity;
    const totalPrice = this.changeToFloat(quantity * price);

    const colId = `total-${cartItemId}`;
    let elem = document.getElementById(colId);

    if (typeof elem != null) {
      elem.innerHTML = totalPrice.toString();
    }

  }

  /* Change value to 2 decimal Places */
  changeToFloat(val) {
    return parseFloat(val.toString()).toFixed(2);
  }

  /* Delete item from Cart */
  deleteItem(index: number) {
    this.cartList.splice(index, 1);
    this.cartService.cartList.splice(index, 1);

  }

}
