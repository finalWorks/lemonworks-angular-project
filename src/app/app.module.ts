import { ProductService } from './shared/product.service';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { StarsComponent } from './stars/stars.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { FilterPipe } from './pipe/filter.pipe';
import { RouteDemoPart01Component } from './demo/route-demo/route-demo-part01/route-demo-part01.component';
import { RouteDemoPart02Component } from './demo/route-demo/route-demo-part02/route-demo-part02.component';
import { RouteDemoPart03Component } from './demo/route-demo/route-demo-part03/route-demo-part03.component';
import { RouteDemoPart04Component } from './demo/route-demo/route-demo-part04/route-demo-part04.component';
import { RouteDemoMainComponent } from './demo/route-demo/route-demo-main/route-demo-main.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { RouteDemoPart05Component } from './demo/route-demo/route-demo-part05/route-demo-part05.component';
import { RouteDemoPart06Component } from './demo/route-demo/route-demo-part06/route-demo-part06.component';
import { RouteDemoPart07Component } from './demo/route-demo/route-demo-part07/route-demo-part07.component';
import { RouteDemoPart08Component } from './demo/route-demo/route-demo-part08/route-demo-part08.component';

// const routeConfig: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'product/:productId', component: ProductDetailComponent },
//   { path: 'routeDemo', component: RouteDemoPart01Component}
// ];

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    FooterComponent,
    NavbarComponent,
    ProductComponent,
    SearchComponent,
    StarsComponent,
    ProductDetailComponent,
    HomeComponent,
    FilterPipe,
    RouteDemoPart01Component,
    RouteDemoPart02Component,
    RouteDemoPart03Component,
    RouteDemoPart04Component,
    RouteDemoMainComponent,
    NotFoundComponent,
    RouteDemoPart05Component,
    RouteDemoPart06Component,
    RouteDemoPart07Component,
    RouteDemoPart08Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    // RouterModule.forRoot(routeConfig),
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
