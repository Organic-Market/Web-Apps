
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { AddEditProductComponent } from '../add-edit-product/add-edit-product.component';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  displayedColumns: string[] = ['id','img','name','price','quantity','category', 'actions'];
  dataSource = new MatTableDataSource<Product>();



  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;


    constructor(private productService: ProductService,public dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    this.getProducts();
  }
  
  openDialog(){
    const dialogRef = this.dialog.open(AddEditProductComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getAllProducts(){
    this.productService.getProduct()
    .subscribe({
      next:(res)=>{
        this.dataSource=new MatTableDataSource(res);
        this.dataSource.paginator=this.paginator;
      },
      error:(err)=>{
        alert("Ocurrio un error")
      }
    })
  }

  openDialogedit(id:number){
    let idActutalProduct=id;
    this.productService.setActualProductId(idActutalProduct);
    const dialogRef = this.dialog.open(EditProductComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.getAllProducts();
      console.log(`Dialog result: ${result}`);
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getProducts() {
    this.productService.getProduct().subscribe((data: Product[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((e: Product) => {
        return e.id !== id ? e : false;
      });
    });
  }

}
