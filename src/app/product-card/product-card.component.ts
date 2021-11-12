import { Component, OnInit, Input } from '@angular/core';


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

  ngOnInit(): void {
  }

}
