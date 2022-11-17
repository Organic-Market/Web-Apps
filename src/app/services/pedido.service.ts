import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pedido } from '../models/pedido';

const basePath = environment.basePath;


@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  savePedido(pedido: any){
    const endpoint = `${basePath}/pedidos`;
    return this.http.post<Pedido>(endpoint, pedido);
  }

  searchByDates(date1: string, date2: string){
    return this.http.get<Pedido[]>(
      `${basePath}/pedidos/search/date?date1=${date1}&date2=${date2}`
      );
  }

  searchByOthers(username: string, fullname: string){
    return this.http.get<Pedido[]>(
      `${basePath}/pedidos/search/others?username=${username}&fullname=${fullname}`
      );
  }
  callProcedureOrFunction() {
    return this.http.get<any[]>(`${basePath}/pedidos/callProcedure`);
  }
  
}
