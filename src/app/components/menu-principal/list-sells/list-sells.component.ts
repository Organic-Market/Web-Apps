import { User } from './../../../models/user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from 'src/app/services/pedido.service';

import * as moment from 'moment';
import { MatTabGroup } from '@angular/material/tabs';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { PedidoDetail } from 'src/app/models/pedidoDetail';
import { Product } from 'src/app/models/product';
import { SessionUser } from 'src/app/models/session-user';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-sells',
  templateUrl: './list-sells.component.html',
  styleUrls: ['./list-sells.component.css']
})
export class ListSellsComponent implements OnInit {
  displayedColumns = ['usuario', 'date'];
  dataSource: MatTableDataSource<Pedido>;

  mayorista: User[];

  producto: Product[];

  idMayoristaSelected: number;
  idProductoSelected: number;

  details: PedidoDetail[]=[];
  quantity: string;
  dateSelected: Date;

  maxEnd: Date = new Date();
  form: FormGroup;
  @ViewChild('tab') tabGroup: MatTabGroup;


  constructor(
    private pedidoService: PedidoService,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private productoService: ProductService
    ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(),
      fullname: new FormControl(),
      startDate: new FormControl(),
      endDate: new FormControl(),
    });
    this.getMayoristas();
    this.getProductos();
  }

  getMayoristas() {
    this.userService.getUserM().subscribe(
      (data: any) => {
        this.mayorista = data;
      },
      (error: any) => {
        console.log('error al consultar mayoristas');
      }
    );
  }

  getProductos() {
    this.productoService.getProducts().subscribe(
      (data: any) => {
        this.producto = data;
      },
      (error: any) => {
        console.log('error al consultar productos');
      }
    );
  }


  addDetail() {
    let producto = new Product();
    producto.id = this.idProductoSelected;

    console.log('producto:', producto.id);

    let det = new PedidoDetail();
    det.quantity = this.quantity;
    det.producto = producto;
    
    this.details.push(det);
    console.log('detalle:', det);
  }

  removeDetail(index: number) {
    this.details.splice(index, 1);
  }

  savePedido() {
    let mayorista = new User();
    mayorista.id = this.idMayoristaSelected;

    console.log('mayorista:', mayorista.id);

    let pedido = new Pedido();
    pedido.mayorista = mayorista;
    pedido.detallePedidos = this.details;

    console.log(this.details);

    console.log('pedido:',pedido);



    pedido.date = moment(this.dateSelected).format(
      'YYYY-MM-DDTHH:mm:ss'
    );

    this.pedidoService.savePedido(pedido).subscribe(() => {
      this.snackBar.open('Registro de consulta OK', 'INFO', { duration: 2000 });

      setTimeout(() => {
        this.cleanControls();
      }, 2000);
    });
  }

  cleanControls() {
    this.idMayoristaSelected = 0;
    this.idProductoSelected = 0;
    this.dateSelected = new Date();
    this.quantity = ' ';
    this.details = [];
  }
  
}
