import { Category } from './../models/category';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  basePath: string = environment.basePath;

  constructor(private http: HttpClient) { }

  getCategories() {
    const endpoint = `${this.basePath}/categories`;
    return this.http.get<Category[]>(endpoint);
  }

  getCategorieById(id: any) {
    const endpoint = `${this.basePath}/categories/ ${id}`;
    return this.http.get<Category>(endpoint);
  }
}
