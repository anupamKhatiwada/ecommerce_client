import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


export class Product {

  id: Number;

  name: String;

  category: String;

  price: Number;

  model: String;

  quantity: Number;

  url: String;

  constructor(productObject: any, id: Number, name: String, category: String, price: Number, model: String, quantity: Number, url: String) {
    if (!productObject) {
      this.id = id;
      this.name = name;
      this.category = category;
      this.price = price;
      this.model = model;
      this.quantity = quantity;
      this.url = url;

    } else {
      this.id = productObject.id;
      this.name = productObject.name;
      this.category = productObject.category;
      this.price = productObject.price;
      this.model = productObject.model;
      this.quantity = productObject.quantity;
      this.url = productObject.url;

    }

  }


}




@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  constructor() { }

  @Input() product!: Product;

  @Output() toCall: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  }



  /*
    Emit two events on the below to functions.
    Simplest thing to do would be to emit the product itself but there are 
    a few caveats to this step. Once we emit and recieve the product in the
    parent we need to find its index because we need to hide that product from the
    product list and show it in the cart. If we send product from here we will not
    be able to access its index. We need to think of a mixed approach 
    which will allow us to send the product and keep track of its index 
    from the product list.

    Actually it can be done. We can pass in the product from here or even the event
    ie. is it added to cart or user is buying now.
    We can catch the particular event in the parent and use it along with the index
    and the product.
  */

  // addToCart(a:String) {
  //   this.toCall.emit(a);
  // }

  // buyNow() {

  // }


  addOrBuy(todo: String) {
    this.toCall.emit(todo);
  }


}
