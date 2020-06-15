import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  saleList: Array<any> = [];
  // saleList: Array<any> = [
  //   {
  //     id: 1,
  //     image: 'assets/images/img-pro-01.jpg',
  //     name: 'Product 1 ipsum sit',
  //     price: '7.79',
  //     category_type: 'best-seller'
  //   },
  //   {
  //     id: 2,
  //     image: 'assets/images/img-pro-02.jpg',
  //     name: 'Product 2 ipsum sit amet',
  //     price: '9.79',
  //     category_type: 'top-featured'
  //   },
  //   {
  //     id: 3,
  //     image: 'assets/images/img-pro-03.jpg',
  //     name: 'Product 03 ipsum sit amet',
  //     price: '10.79',
  //     category_type: 'top-featured'
  //   },
  //   {
  //     id: 4,
  //     image: 'assets/images/img-pro-04.jpg',
  //     name: 'Product 100004 Lorem ipsum sit',
  //     price: '15.79',
  //     category_type: 'best-seller'
  //   },
  // ];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getProductsFromServer();
  }

  getProductsFromServer() {
    this.cartService.getProducts().subscribe((data: any) => {
      console.log(data);

      if (data && data.result === 1 && data.data.length > 0) {
        /* Data Found */
        alert(data.data.length);
        this.saleList = data.data;

      } else {
        this.saleList = [];
      }

      debugger
      // this.cartService.cartList = data;
      // this.saleList = data;

    }, err => {
      console.log(err.message);
      debugger
    }, () => {
      console.log('completed');
      debugger
    });
  }


  addToCartProduct(saleShop) {
    this.cartService.addItemToCart(saleShop);
  }

}
