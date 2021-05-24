import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../../core/services/products/products.service";
import {ProductModel} from "../../../core/models/product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: ProductModel[] = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.fetchProduct();
  }

  fetchProduct(): void {
    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(id: string): void {
    this.productService.deleteProduct(id).subscribe(rta => {
      if (rta) {
        this.products = this.products.filter(product => {
          return product.id !== id;
        });
      }
    });
  }
}
