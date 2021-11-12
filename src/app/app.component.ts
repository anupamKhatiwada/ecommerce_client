import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { takeUntil } from 'rxjs/operators';
import { Product } from './product-card/product-card.component';
import { ProductService } from './services/product-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  showSpinner: Boolean = true;


  // ------------------------------------------------------------------ //


  // Implementation of responsiveness for the grid of products

  destroyed = new Subject<void>();
  gridNumber: any;

  // Create a map to display breakpoint names for demonstration purposes.
  displayNameMap = new Map([
    [Breakpoints.XSmall, '1'],
    [Breakpoints.Small, '2'],
    [Breakpoints.Medium, '3'],
    [Breakpoints.Large, '4'],
    [Breakpoints.XLarge, '5'],
  ]);

  constructor(breakpointObserver: BreakpointObserver, private productService: ProductService) {
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {



            let t = this.displayNameMap.get(query) ?? 'Unknown';

            this.gridNumber = parseInt(t);

            if (this.gridNumber == NaN) this.gridNumber = 4;
          }
        }
      });



  }

  // ---------------------------------------------------------------- //


  // Fill this product array with products from the data base
  products: Array<Product> = [];

  productOne: Product = new Product(null, 1, "lundesh", "electronics", 5000, "model-one", 5, "https://material.angular.io/assets/img/examples/shiba2.jpg")



  ngOnInit(): void {

    // Display spinner when initial data arrives from fetch product service
    setTimeout(() => this.showSpinner = false, 3000);



    for (let i = 0; i < 50; i++) {
      this.products.push(JSON.parse(JSON.stringify(this.productOne)))
    }

  }

  /*

    The below is the product trigger called when a product is either added to cart
    or should be bought now. 
    
    Both functionalities are at the core same. The difference is when a product 
    is added to cart we stop displaying the product in the main page and on the
    cart button on the navbar we show the number of products present in the cart.

    On pressing the buy now button it should add the specific product to the cart
    and we should redirect to the cart page. Routing needs to be implemented as
    as cart should have a different route.

  */

  productTriggerCalled(event: Event, index: Number) {
    console.log(event, index)
  }










}
