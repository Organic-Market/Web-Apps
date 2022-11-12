import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {

  public myForm!: FormGroup;
  categories: Category[] = [];
  selectedFile: any;
  nameImg: string = '';

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private categoryService: CategoryService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.reactiveForm();
    this.getCategories();
  }

  reactiveForm() {
    this.myForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.maxLength(20)]],
      stock: ['', [Validators.required]],
      unit_price: ['', [Validators.required]],   
      category: ['', [Validators.required]],   
      picture: ['', [Validators.required]],
    });
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(
      (data: any) => {
        this.categories = data;
      },
      (error: any) => {
        console.log('error al consultar categorias');
      }
    );
  }

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);

    this.nameImg = event.target.files[0].name;
  }

  saveProduct() {
    const product: Product = {
      id: 0,
      name: this.myForm.get('name')?.value,
      unit_price: this.myForm.get('unit_price')?.value,
      stock: this.myForm.get('stock')?.value,
      category: this.myForm.get('category')?.value,
      picture: this.selectedFile,
    };

    const uploadImageData = new FormData();
    uploadImageData.append('name', product.name);
    uploadImageData.append('unit_price', product.unit_price.toString());
    uploadImageData.append('stock', product.stock.toFixed());
    uploadImageData.append('categoryId', product.category);
    uploadImageData.append('picture', product.picture, product.picture.name);

    //TODO: llamado a metodo service registro producto
    this.productService.saveProduct(uploadImageData).subscribe({
      next: (data) => {
        this.snackBar.open('El producto fue registrado con exito!', '', {
          duration: 3000,
        });
        this.router.navigate(['/productos']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
