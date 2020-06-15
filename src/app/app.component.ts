import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../assets/css/all.css']
  // '../../../assets/css/all.css'
})
export class AppComponent {
  title = 'esasoft-shop';
  cartList: Array<any> = [];
  cartCurrency: any = '';


  constructor(private cartService: CartService) {
    this.cartList = this.cartService.cartList;
    this.cartCurrency = this.cartService.cartCurrency;
  }

  /* Change currency */
  changeCurrency(event) {
    const val = event.target.value;
    this.cartCurrency = val;
    this.cartService.cartCurrency = val;
  }
}
