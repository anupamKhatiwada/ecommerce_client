import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { takeUntil } from 'rxjs/operators';
import { Product } from './product-card/product-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {



  ngOnInit(): void {
    // throw new Error("Method not implemented.");

    setTimeout(() => this.showSpinner = false, 3000)



    this.arr.length = 100;
    this.arr.fill(1);
  }


  arr: Number[] = []

  showSpinner: Boolean = true;


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

  constructor(breakpointObserver: BreakpointObserver) {
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

  productOne: Product = new Product(null, 1, "lundesh", "electronics", 5000, "model-one", 5, "https://material.angular.io/assets/img/examples/shiba2.jpg")




}
