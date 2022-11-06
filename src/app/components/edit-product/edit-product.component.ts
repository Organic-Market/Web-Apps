import { Product } from 'src/app/models/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  myForm!: FormGroup;
  product!: Product;
  idProduct: any;



  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.idProduct = this.productService.getActualProductId();
    this.productService.getProductId(this.idProduct).subscribe((data) => {
      this.product = data;
      this.myForm = this.fb.group({
        name: [this.product.name,[Validators.required, Validators.maxLength(10)],],
        unit_price: [this.product.unit_price, [Validators.required]],
        stock: [this.product.stock, [Validators.required]],
      });
    });
  } 
  updateProduct() {
    const product: Product = {
      id: this.idProduct,
      name: this.myForm.get('name')!.value,
      unit_price: this.myForm.get('unit_price')!.value,
      category: this.myForm.get('category')!.value,
      stock: this.myForm.get('stock')!.value
    };
    this.productService.updateProduct(this.idProduct, product).subscribe({
      next: (data) => {
        this.snackBar.open('El producto fue actualizado con exito!', '', {
          duration: 3000,
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
