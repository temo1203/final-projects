import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsApiComponent } from './news-api/news-api.component';
import { ProductsComponent } from './products/products.component';
import { ItComponent } from './it/it.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    NewsApiComponent,
    AppComponent,
    ProductsComponent,
    ItComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
