import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartList: Array<any> = [];
  cartCurrency: any = 'pkr';
  baseUrl: any = 'http://192.168.8.100:8001/';
  // baseUrl: any = 'http://echo.jsontest.com/key/value/one/two';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.baseUrl + 'Menu/list', this.httpOptions);
  }

  /* Add and check item to Cart */
  addItemToCart(item) {
    if (item && this.cartList.length > 0) {
      /* Find existing item */
      const isItemMatched = (element) => (element.pk === item.pk && element.description === item.description);

      const index = this.cartList.findIndex(isItemMatched);

      if (index !== -1) {
        /* Array item found */
        // this.cartList[`${index}`].quantity += 1;
        alert('Product already existing.');
      } else {
        /* Add New Item */
        this.addItemFirstTime(item);
      }
    } else if (item && this.cartList.length === 0) {
      /* add first item */
      this.addItemFirstTime(item);
    }
  }

  /* Add new item to cart list */
  addItemFirstTime(item) {
    let newItem = item;
    newItem.quantity = 1;
    this.cartList.push(newItem);
  }
}
