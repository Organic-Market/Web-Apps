import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  basePath: string = environment.basePath;

  idActualUser!: number;

  constructor(private http: HttpClient) { }

  //listo
  getUser() {
    return this.http.get<User[]>(`${this.basePath}/users`)
  }

  //listo
  getUserIdM(id: any) {
    return this.http.get<User>(`${this.basePath}/mayorista/${id}`)
  }
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

  getUserAgricultorByUsername(username: string) {
    return this.http.get<User>(`${this.basePath}/agricultor/${username}`)
  }

  getUserMayoristaByUsername(username: string) {
    return this.http.get<User>(`${this.basePath}/mayorista/${username}`)
  }

  setActualIde(id: any): void {
    this.idActualUser = id;
  }

  //listo
  addUser(user: User) {
    return this.http.post<User>(
      `${this.basePath}/users`,
      user
    );
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
