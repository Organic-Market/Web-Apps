import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from 'src/app/services/pedido.service';

import * as moment from 'moment';
import { MatTabGroup } from '@angular/material/tabs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list-sells',
  templateUrl: './list-sells.component.html',
  styleUrls: ['./list-sells.component.css']
})
export class ListSellsComponent implements OnInit {
  displayedColumns = ['mayorista', 'date'];
  dataSource: MatTableDataSource<Pedido>;

  maxEnd: Date = new Date();
  form: FormGroup;
  @ViewChild('tab') tabGroup: MatTabGroup;

  constructor(private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(),
      fullname: new FormControl(),
      startDate: new FormControl(),
      endDate: new FormControl(),
    });
  }

  search() {
    if (this.tabGroup.selectedIndex == 0) {
      let username = this.form.value['username'];
      let fullname = this.form.value['fullname'];

      this.pedidoService
        .searchByOthers(username, fullname)
        .subscribe((data) => (this.dataSource = new MatTableDataSource(data)));
    } else {
      let date1 = this.form.value['startDate'];
      let date2 = this.form.value['endDate'];

      date1 = moment(date1).format('YYYY-MM-DDTHH:mm:ss');
      date2 = moment(date2).format('YYYY-MM-DDTHH:mm:ss');

      console.log(date1);
      console.log(date2);

      this.pedidoService
        .searchByDates(date1, date2)
        .subscribe((data) => (this.dataSource = new MatTableDataSource(data)));
    }
  }
}
