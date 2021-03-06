import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductFormComponent} from './components/product-form/product-form.component';
import {NavComponent} from './components/nav/nav.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {TableComponent} from './components/table/table.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductEditComponent} from './components/product-edit/product-edit.component';

const routes: Routes = [
  {
    path: '', component: NavComponent,
    children: [
      {path: 'products/create', component: ProductFormComponent},
      {path: 'products/edit/:id', component: ProductEditComponent},
      {path: '', component: DashboardComponent},
      {path: 'table', component: TableComponent},
      {path: 'products', component: ProductListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
