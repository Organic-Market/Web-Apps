
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  basePath: string = environment.basePathProducts;
  basePathInCar: string = environment.basePathProductInCar;
  idActualProduct!: number;

  constructor(private http: HttpClient) { }
  //listo
  getProduct() {
    return this.http.get<Product[]>(`${this.basePath}/products`);
  }

  getProductInCar() {
    return this.http.get<Product[]>(this.basePathInCar);
  }

  //listo
  getProductId(id: any) {
    return this.http.get<Product>(`${this.basePath}/products/${id}`);
  }

  setActualProductId(id:any):void{
    this.idActualProduct=id;
  }

  getActualProductId(){
    return this.idActualProduct
  }
  //listo
  addProduct(product: Product) {
    return this.http.post<Product>(`${this.basePath}/products`, product);
  }

  //listo
  updateProduct(id: any, product: Product) {
    return this.http.put<Product>(`${this.basePath}/products/${id}`, product);
  }

  //listo
  deleteProduct(id: any) {
    return this.http.delete<Product>(`${this.basePath}/products/${id}`);
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

  getCategory(categoria?: any){
    return this.http.get<any>(`${this.basePath}/categoria`);
  }

}
