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


  
}
