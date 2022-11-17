import { Sell } from './../models/sells';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SellService {
  basePath: string = environment.basePath;

  constructor(private http: HttpClient) { }

  getSell() {
    return this.http.get<Sell[]>(this.basePath);
  }

  getSellId(id: any) {
    return this.http.get<Sell>(`${this.basePath}/${id}`);
  }

  addSell(sell: Sell) {
    return this.http.post<Sell>(this.basePath, sell);
  }

  
}
