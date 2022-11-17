import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  displayedColumns: string[] = ['id','name','quantity','price', 'actions'];
  dataSource = new MatTableDataSource<Product>();
  
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private productService: ProductService,public dialog: MatDialog, private router: Router) { }

  
  ngOnInit(): void {
    this.getProductsInCar();

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getProductsInCar() {
    this.productService.getProductInCar().subscribe((data: Product[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteProductInCar(id: number) {
    this.productService.deleteProductInCar(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((e: Product) => {
        return e.id !== id ? e : false;
      });
    });
  }
}
