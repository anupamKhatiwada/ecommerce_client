import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatToolbarModule } from '@angular/material/toolbar';

import { MatIconModule } from '@angular/material/icon';

import { MatInputModule } from '@angular/material/input';

import { ProductCardComponent } from './product-card/product-card.component';

import { MatCardModule } from '@angular/material/card';

import { MatButtonModule } from '@angular/material/button';

import { MatGridListModule } from '@angular/material/grid-list';

import { LayoutModule } from '@angular/cdk/layout';

import { MatRippleModule } from '@angular/material/core';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    LayoutModule,
    MatRippleModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
