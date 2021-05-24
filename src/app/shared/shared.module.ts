import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExponentialPipe} from './pipes/exponential/exponential.pipe';
import {HighlightDirective} from './directives/highlight/highlight.directive';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../material/material.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent
  ],
  exports: [ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    MatToolbarModule,
    MatBadgeModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
}
