import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from 'src/app/models/product';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  public dataSource: Product[] = [];
  constructor(
    private snackBar: MatSnackBar,
    private productService:ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

 


  getProducts() {
    this.productService.getProduct().subscribe((data: Product[]) => {
      this.dataSource= data;
    });
  }

  saveProduct(id:any,price:any,name:any,stock:any,category:any): void {
    const product: Product = {
      id: id,
      name: name,
      price: price,
      category: category,
      stock: stock,

    };
    this.productService.addProductInCar(product).subscribe({
      next: (data) => {
        this.snackBar.open('El producto añadido al carrito!', '', {
          duration: 3000,
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
