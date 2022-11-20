import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  basePath: string = environment.basePath;

  idActualUser!: number;

  constructor(private http: HttpClient) { }

  //Listo
  signInM(login: Login): any {
    return this.http.post(`${this.basePath}/mayorista/signin`, login);
  }
  //Listo
  signInA(login: Login): any {
    return this.http.post(`${this.basePath}/agricultor/signin`, login);
  }

  getUserM() {
    return this.http.get<User>(`${this.basePath}/mayorista`)
  }

  getUserA() {
    return this.http.get<User>(`${this.basePath}/agricultor`)
  }

  //listo
  getUserIdM(id: any) {
    return this.http.get<User>(`${this.basePath}/mayorista/${id}`)
  }
  //listo
  getUserIdA(id: any) {
    return this.http.get<User>(`${this.basePath}/agricultor/${id}`)
  }

  getIdActaulUser(): number {
    const currentUser = JSON.parse(localStorage.getItem('userId') || '{}');
    return this.idActualUser = currentUser;
  }

  getUsernameActualUser(): any {
    const currentUsername = localStorage.getItem('username');
    return currentUsername;
  }

  setActualIde(id: any): void {
    this.idActualUser = id;
  }

  //listo
  addUserM(user: User) {
    return this.http.post<User>(
      `${this.basePath}/mayorista`,
      user
    );
  }
  //listo
  addUserA(user: User) {
    return this.http.post<User>(
      `${this.basePath}/agricultor`,
      user
    );
  }

  //listo
  updateUserA(id: any, user: User) {
    return this.http.put<User>(`${this.basePath}/agricultor/${id}`, user);
  }

  updateUserM(id: any, user: User) {
    return this.http.put<User>(`${this.basePath}/mayorista/${id}`, user);
  }
}
