import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductComponent} from './components/product/product.component';
import {CartComponent} from './components/cart/cart.component';
import {ExponentialPipe} from './pipes/exponential.pipe';
import {FormsModule} from '@angular/forms';
import {HighlightDirective} from './directives/highlight.directive';
import {HomeComponent} from './components/home/home.component';
import {ProductsComponent} from './components/products/products.component';
import {ContactComponent} from './components/contact/contact.component';

import {AppRoutingModule} from './app-routing';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    ExponentialPipe,
    HighlightDirective,
    HomeComponent,
    ProductsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
