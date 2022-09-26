
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  basePath: string = environment.basePathProduc;

  constructor(private http: HttpClient) { }
  
  getProduct() {
    return this.http.get<Product[]>(this.basePath);
  }

  getProductId(id: any) {
    return this.http.get<Product>(`${this.basePath}/${id}`);
  }

  addProduct(product: Product) {
    return this.http.post<Product>(this.basePath, product);
  }

  updateProduct(id: any, product: Product) {
    return this.http.put<Product>(`${this.basePath}/${id}`, product);
  }

  deleteProduct(id: any) {
    return this.http.delete<Product>(`${this.basePath}/${id}`);
  }

}
