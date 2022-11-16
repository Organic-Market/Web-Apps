import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Chart, registerables } from 'chart.js';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  chartBar: any;
  chartdoughnut: any;

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
    private productService: ProductService
    ) { 
      Chart.register(...registerables);
    }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProduct().subscribe({
      next: (data) => {
        this.processProductResponse(data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  processProductResponse(resp: any) {
    const nameProduct: String[] = [];
    const stock: number[] = [];

    let listCProduct = resp;
    console.log('listCProduct:', listCProduct);

    listCProduct.forEach((element: Product) => {
      nameProduct.push(element.name);
      stock.push(element.stock);
    });

    //nuestro gráfico de barras
    this.chartBar = new Chart('canvas-bar', {
      type: 'bar',
      data: {
        labels: nameProduct,
        datasets: [
          {
            label: 'Productos',
            data: stock,
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

    //nuestro gráfico de doughnut
    this.chartdoughnut = new Chart('canvas-doughnut', {
      type: 'doughnut',
      data: {
        labels: nameProduct,
        datasets: [
          {
            label: 'Productos',
            data: stock,
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
  }
}
