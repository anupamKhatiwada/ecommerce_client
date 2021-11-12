import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }


  private productUrl = '';


  getProducts() {

    return this.http.get(this.productUrl)

  }



}
