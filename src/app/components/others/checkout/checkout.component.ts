import { ProductService } from 'src/app/services/product.service';
import { SellService } from '../../../services/sell.service';
import { Sell } from '../../../models/sells';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  myForm!: FormGroup;
  public dataSource: Product[] = [];

  constructor(
    private fb: FormBuilder,
    private sellService: SellService,
    private productService: ProductService,
    private router: Router,
    private snackBar: MatSnackBar,) {
    this.reactiveForm();
  }

  ngOnInit(): void {
    this.getProductsInCar();
  }

  getProductsInCar() {
    this.productService.getProductInCar().subscribe((data: Product[]) => {
      this.dataSource = data;
    });
  }

  reactiveForm() {
    this.myForm = this.fb.group({
      id: [''],
      names: ['', [Validators.required, Validators.maxLength(30)]],
      lastnames: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  saveVenta(product: any, total: any, quantity: any): void {
    const sell: Sell = {
      id: 0,
      name: this.myForm.get('names')!.value,
      lastname: this.myForm.get('lastnames')!.value,
      product: product,
      total: total,
      email: this.myForm.get('email')!.value,
      quantity: quantity,

    };
    this.sellService.addSell(sell).subscribe({
      next: (data) => {
        this.snackBar.open('Pago realizado', '', {
          duration: 3000,
        });
        this.router.navigate(['/shop']);

      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
