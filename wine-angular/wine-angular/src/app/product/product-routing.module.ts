import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { DetailsComponent } from '../details/details.component';
import { ProductCardComponent } from '../product-card/product-card.component';

const routes: Routes = [
  { path: '', component: ProductCardComponent },
  { path: 'products', component: ProductCardComponent},
  { path: 'details/:id', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
