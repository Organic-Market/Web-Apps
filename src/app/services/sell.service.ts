import { Sell } from './../models/sells';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SellService {
  basePathSell: string = environment.basePathSell;

  constructor(private http: HttpClient) { }

  getSell() {
    return this.http.get<Sell[]>(this.basePathSell);
  }

  getSellId(id: any) {
    return this.http.get<Sell>(`${this.basePathSell}/${id}`);
  }

  addSell(sell: Sell) {
    return this.http.post<Sell>(this.basePathSell, sell);
  }
}
