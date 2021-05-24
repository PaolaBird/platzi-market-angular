import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../../../core/models/product.model';
import {ProductsService} from '../../../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  products: ProductModel[] = [];

  constructor(private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.fetchProducts();
  }

  clickProduct(id: number): void {

  }

  fetchProducts(): void {
    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }


}
