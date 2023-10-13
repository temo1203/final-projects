import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsApiComponent } from './news-api/news-api.component';
import { ProductsComponent } from './products/products.component';
import { ItComponent } from './it/it.component';

const routes: Routes = [
  {
    path: 'news',
    component: NewsApiComponent,
  },
  { path: 'products', component: ProductsComponent },
  { path: 'it', component: ItComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
