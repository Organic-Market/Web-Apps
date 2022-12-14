
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

const basePath = environment.basePath;

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  basePathInCar: string = environment.basePathProductInCar;
  idActualProduct!: number;

  constructor(private http: HttpClient) { }
  //listo
  getProducts() {
    const endpoint = `${basePath}/products`;
    return this.http.get<Product[]>(endpoint);
  }
 
  exportProduct() {
    const endpoint = `${basePath}/products/export/excel`;
    return this.http.get(endpoint, {
      responseType: 'blob',
    });
  }

  getProductByName(name: any) {
    const endpoint = `${basePath}/products/filter/${name}`;
    return this.http.get<Product>(endpoint);
  }

  //listo
  saveProduct(product: any) {
    const endpoint = `${basePath}/products`;
    return this.http.post<Product[]>(endpoint, product);
  }

  
  //listo
  updateProduct(id: any, product: Product) {
    return this.http.put<Product>(`${basePath}/products/${id}`, product);
  }

  //listo
  deleteProduct(id: any) {
    return this.http.delete<Product>(`${basePath}/products/${id}`);
  }





  getProductId(id: any) {
    return this.http.get<Product>(`${basePath}/products/${id}`);
  }
  

  setActualProductId(id:any):void{
    this.idActualProduct=id;
  }
    
  getActualProductId(){
   return this.idActualProduct
  }
      
  getProductInCar() {
    return this.http.get<Product[]>(this.basePathInCar);
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

  // getCategory(categoria?: any){
  //   return this.http.get<any>(`${basePath}/categoria`);
  // }


}
