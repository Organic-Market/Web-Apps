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

  getUser(){
    return this.http.get<User[]>(this.basePath)
  }

  getUserId(id:any){
    return this.http.get<User>(`${this.basePath}/${id}`)
  }



  getIdActaulUser():number{
    return this.idActualUser
  }
  setActualIde(id:any):void{
    this.idActualUser=id;
  }
  addUser(user: User) {
    return this.http.post<User>(
      this.basePath,
      user
    );
  }

  updateUser(id: any, user: User) {
    return this.http.put<User>(`${this.basePath}/${id}`, user);
  }

}
