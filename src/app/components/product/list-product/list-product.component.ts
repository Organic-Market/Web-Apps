import { CategoryService } from '../../../services/category.service';

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { AddEditProductComponent } from '../add-edit-product/add-edit-product.component';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { ProductService } from '../../../services/product.service';
import { Category } from 'src/app/models/category';
import { NewCategoryComponent } from '../new-category/new-category.component';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'unit_price',
    'stock',
    //'category',
    'picture', 
    'actions',
  ];

  displayedColumns1: string[] = [
    'id', 
    'name',
    'actions'
  ];

  dataSource = new MatTableDataSource<Product>();
  dataSourceC = new MatTableDataSource<Category>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;


    constructor(
      private productService: ProductService,
      public dialog: MatDialog,
      private snackBar: MatSnackBar,
      private router: Router,
      private categoryService: CategoryService,
      ) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }
  
  //Categorias
  getCategories() {
    this.categoryService.getCategories().subscribe({
      next: (data) => {
        this.dataSourceC = new MatTableDataSource(data);
        this.dataSourceC.paginator = this.paginator;
        console.log('respuesta de categorias: ', data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  
  filterCategory(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceC.filter = filterValue.trim().toLowerCase();
  }
  
  openSnackBar1(
    message: string,
    action: string
  ): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  deleteCategory(id: number) {
    this.categoryService.deleteCategorie(id).subscribe(() => {
      this.dataSourceC.data = this.dataSourceC.data.filter((e: Category) => {
        return e.id !== id ? e : false;
      });
    });
  }

  exportExcelC() {
    this.categoryService.exportCategories().subscribe(
      (data: any) => {
        let file = new Blob([data], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });
        let fileUrl = URL.createObjectURL(file);
        var anchor = document.createElement('a');
        anchor.download = 'Categorias.xlsx';
        anchor.href = fileUrl;
        anchor.click();

        this.openSnackBar('Archivo exportado correctamente', 'Exitosa');
      },
      (error: any) => {
        this.openSnackBar('No se pudo exportar el archivo', 'Error');
      }
    );
  }
  openDialog1(){
    const dialogRef = this.dialog.open(NewCategoryComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  //Categorias
  
  //Productos
  openDialog(){
    const dialogRef = this.dialog.open(AddEditProductComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  getProducts() {
    this.productService.getProducts().subscribe(
      (data) => {
        console.log('respuesta de productos: ', data);
        this.processProductResponse(data);
      },
      (error: any) => {
        console.log('error en productos: ', error);
      }
    );
  }

  processProductResponse(resp: any) {
    const dateProduct: Product[] = [];

    let listCProduct = resp;

    listCProduct.forEach((element: Product) => {
      //element.category = element.category.name;
      element.picture = 'data:image/jpeg;base64,' + element.picture;
      dateProduct.push(element);
    });

    //set the datasource
    this.dataSource = new MatTableDataSource<Product>(dateProduct);
    this.dataSource.paginator = this.paginator;
  }

  openDialogedit(id:number){
    let idActualProduct=id;
    this.productService.setActualProductId(idActualProduct);
    const dialogRef = this.dialog.open(EditProductComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.getProducts();
      console.log(`Dialog result: ${result}`);
    });
  }

  filterProductByName(name: any) {
    if (name.length === 0) {
      return this.getProducts();
    }

    this.productService.getProductByName(name).subscribe((resp: any) => {
      this.processProductResponse(resp);
    });
  }

  /* getProducts() {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }  */

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((e: Product) => {
        return e.id !== id ? e : false;
      });
    });
  }

  openSnackBar(
    message: string,
    action: string
  ): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, {
      duration: 2000,
    });
  }


  exportExcel() {
    this.productService.exportProduct().subscribe(
      (data: any) => {
        let file = new Blob([data], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });
        let fileUrl = URL.createObjectURL(file);
        var anchor = document.createElement('a');
        anchor.download = 'Productos.xlsx';
        anchor.href = fileUrl;
        anchor.click();

        this.openSnackBar('Archivo exportado correctamente', 'Exitosa');
      },
      (error: any) => {
        this.openSnackBar('No se pudo exportar el archivo', 'Error');
      }
    );
  }

  // edit(
  //   id: number,
  //   name: string,
  //   unit_price: number,
  //   stock: number,
  //   category: any
  // ) {}

}
