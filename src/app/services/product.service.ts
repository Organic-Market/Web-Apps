
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
<<<<<<< Updated upstream
  basePath: string = environment.basePathProducts;
=======
  basePath: string = environment.basePathProduct;
  basePathInCar: string = environment.basePathProductInCar;


  idActualProduct!: number;
>>>>>>> Stashed changes

  constructor(private http: HttpClient) { }
  
  getProduct() {
    return this.http.get<Product[]>(this.basePath);
  }

  getProductInCar() {
    return this.http.get<Product[]>(this.basePathInCar);
  }

  getProductId(id: any) {
    return this.http.get<Product>(`${this.basePath}/${id}`);
  }

  setActualProductId(id:any):void{
    this.idActualProduct=id;
  }

  getActualProductId(){
    return this.idActualProduct
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

  addProductInCar(productInCar: Product) {
    return this.http.post<Product>(this.basePathInCar, productInCar);
  }

  updateProductInCar(id: any, product: Product) {
    return this.http.put<Product>(`${this.basePathInCar}/${id}`, product);
  }

  deleteProductInCar(id: any) {
    return this.http.delete<Product>(`${this.basePathInCar}/${id}`);
  }


}
