import { Category } from './../models/category';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

const basePath = environment.basePath;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories() {
    const endpoint = `${basePath}/categoria`;
    return this.http.get<Category[]>(endpoint);
  }

  getCategorieById(id: any) {
    const endpoint = `${basePath}/categoria/${id}`;
    return this.http.get<Category>(endpoint);
  }
}
