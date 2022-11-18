import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { CategoryService } from './../../../services/category.service';
import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NewCategoryComponent } from '../new-category/new-category.component';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  displayedColumns1: string[] = [
    'id', 
    'name',
    'actions'
  ];


  dataSourceC = new MatTableDataSource<Category>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private categoryService: CategoryService,
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

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
  
  openSnackBar(
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


}
