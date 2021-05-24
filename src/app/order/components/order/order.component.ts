import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../../../core/models/product.model';
import {CartService} from '../../../core/services/cart/cart.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  products$: Observable<ProductModel[]>;

  constructor(private cartService: CartService) {
    this.products$ = this.cartService.cart$;
  }

  ngOnInit(): void {
  }

}
