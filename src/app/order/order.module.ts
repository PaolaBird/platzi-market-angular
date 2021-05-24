import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrderRoutingModule} from './order-routing.module';
import {OrderComponent} from './components/order/order.component';
import {MaterialModule} from '../material/material.module';
import {SharedModule} from '../shared/shared.module';
import { NotRepeatProductPipe } from './pipes/not-repeat-product.pipe';


@NgModule({
  declarations: [OrderComponent, NotRepeatProductPipe],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class OrderModule {
}
