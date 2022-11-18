import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { map } from 'rxjs';
import { PedidoService } from 'src/app/services/pedido.service';


@Component({
  selector: 'app-dashboard-m',
  templateUrl: './dashboard-m.component.html',
  styleUrls: ['./dashboard-m.component.css']
})
export class DashboardMComponent implements OnInit {

  chart:any;

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: '', cols: 1, rows: 1 },
        ];
      }

      return [
        { title: '', cols: 2, rows: 1 },
      ];
    })
    
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private pedidoService: PedidoService
  ) { 
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.draw();
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
