import { Chart, registerables } from 'chart.js';
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
  displayedColumns = ['usuario', 'date'];
  dataSource: MatTableDataSource<Pedido>;

  maxEnd: Date = new Date();
  form: FormGroup;
  @ViewChild('tab') tabGroup: MatTabGroup;

  chart:any; 

  constructor(private pedidoService: PedidoService) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(),
      fullname: new FormControl(),
      startDate: new FormControl(),
      endDate: new FormControl(),
    });
    this.draw();
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

  draw() {
    this.pedidoService.callProcedureOrFunction().subscribe((data) => {
      let dates = data.map((x) => x.consultdate);
      let quantities = data.map((x) => x.quantity);

      this.chart = new Chart('canvas-bar', {
        type: 'bar',
        data: {
          labels: dates,
          datasets: [
            {
              label: 'Quantity',
              data: quantities,
              borderColor: [
                '#C0392B',
                '#8E44AD',
                '#2980B9',
                '#16A085',
                '#2ECC71',
                '#F39C12',
                '#D35400',
                '#95A5A6',
                '#34495E',
              ],

              backgroundColor: [
                '#C0392B',
                '#8E44AD',
                '#2980B9',
                '#16A085',
                '#2ECC71',
                '#F39C12',
                '#D35400',
                '#95A5A6',
                '#34495E',
              ],
            },
          ],
        },
      });
    });
  }
}
