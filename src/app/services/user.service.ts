import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  basePath:string=environment.basePath;

  idActualUser!: number;

  constructor(private http: HttpClient) { }

  //listo
  getUser(){
    return this.http.get<User[]>(`${this.basePath}/users`)
  }

  //listo
  getUserId(id:any){
    return this.http.get<User>(`${this.basePath}/users/${id}`)
  }

  getIdActaulUser():number{
    return this.idActualUser
  }
  setActualIde(id:any):void{
    this.idActualUser=id;
  }

  //listo
  addUser(user: User) {
    return this.http.post<User>(
      `${this.basePath}/users`,
      user
    );
  }

  /*addMayorista(mayorista: Mayorista) {
    return this.http.post<Mayorista>(
      `${this.basePath}/users`,
      mayorista
    );
  }*/
  

  //listo
  updateUser(id: any, user: User) {
    return this.http.put<User>(`${this.basePath}/users/${id}`, user);
  }

}
