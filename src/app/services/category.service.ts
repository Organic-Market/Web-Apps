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

  saveCategorie(body: any) {
    const endpoint = `${basePath}/categoria`;
    return this.http.post<Category>(endpoint, body);
  }

  updateCategorie(body: any, id: any) {
    const endpoint = `${basePath}/categoria/ ${id}`;
    return this.http.put<Category>(endpoint, body);
  }

  deleteCategorie(id: any) {
    const endpoint = `${basePath}/categoria/ ${id}`;
    return this.http.delete<Category>(endpoint);
  }

  exportCategories() {
    const endpoint = `${basePath}/categoria/export/excel`;
    return this.http.get(endpoint, {
      responseType: 'blob',
    });
  }

}
