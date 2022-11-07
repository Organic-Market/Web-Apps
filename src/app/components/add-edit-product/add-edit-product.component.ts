import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {

  myForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { 
    this.reactiveForm();
  }

  ngOnInit(): void {

  }

  reactiveForm() {
    this.myForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.maxLength(20)]],
      stock: ['', [Validators.required]],
      unit_price: ['', [Validators.required]],   
    });
  }

  saveProduct(): void {
    const product: Product = {
      id: 0,
      name: this.myForm.get('name')!.value,
      stock: this.myForm.get('stock')!.value,
      unit_price: this.myForm.get('unit_price')!.value,
    };
    this.productService.addProduct(product).subscribe({
      next: (data) => {
        this.snackBar.open('El producto fue registrado con exito!', '', {
          duration: 3000,
        });

      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
