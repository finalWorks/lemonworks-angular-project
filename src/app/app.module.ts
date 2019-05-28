import { Product3Service } from './demo/di-demo/demo-shared/product3.service';
import { LoggerService } from './demo/di-demo/demo-shared/logger.service';
import { Product1Service } from './demo/di-demo/demo-shared/product1.service';
import { Product2Service } from './demo/di-demo/demo-shared/product2.service';
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
import { RouteDemoPart09Component } from './demo/route-demo/route-demo-part09/route-demo-part09.component';
import { Product1Component } from './demo/di-demo/product1/product1.component';
import { Product2Component } from './demo/di-demo/product2/product2.component';
import { ProductListComponent } from './demo/di-demo/product-list/product-list.component';
import { Product3Component } from './demo/di-demo/product3/product3.component';
import { Product4Component } from './demo/di-demo/product4/product4.component';
import { Product5Component } from './demo/di-demo/product5/product5.component';
import { Product6Component } from './demo/di-demo/product6/product6.component';
import { AnotherProduct1Service } from './demo/di-demo/demo-shared/another-product1.service';
import { Product4Service } from './demo/di-demo/demo-shared/product4.service';
import { Product7Component } from './demo/di-demo/product7/product7.component';
import { Product8Component } from './demo/di-demo/product8/product8.component';

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
    RouteDemoPart08Component,
    RouteDemoPart09Component,
    Product1Component,
    Product2Component,
    ProductListComponent,
    Product3Component,
    Product4Component,
    Product5Component,
    Product6Component,
    Product7Component,
    Product8Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    // RouterModule.forRoot(routeConfig),
    ReactiveFormsModule
  ],
  providers: [{
    provide: Product2Service,
    useFactory: () => {
      const logger: LoggerService = new LoggerService();
      const dev: boolean = Math.random() > 0.5;
      if (dev) {
        return new Product2Service(logger);
      } else {
        return new AnotherProduct1Service(logger);
      }
    }
  },
  {
    provide: Product3Service,
    useFactory: (logger: LoggerService) => {
      const dev: boolean = Math.random() > 0.5;
      if (dev) {
        return new Product3Service(logger);
      } else {
        return new AnotherProduct1Service(logger);
      }
    }, deps: [LoggerService]
  },
  // {
  //   provide: Product4Service,
  //   useFactory: (logger: LoggerService, isDev: boolean) => {
  //     if (isDev) {
  //       return new Product4Service(logger);
  //     } else {
  //       return new AnotherProduct1Service(logger);
  //     }
  //   }, deps: [LoggerService, 'IS_DEV_ENV']
  // },
  {
    provide: Product4Service,
    useFactory: (logger: LoggerService, appConfig) => {
      if (appConfig.isDev) {
        return new Product4Service(logger);
      } else {
        return new AnotherProduct1Service(logger);
      }
    }, deps: [LoggerService, 'APP_CONFIG']
  },
  {
    provide: 'IS_DEV_ENV', useValue: true
  },
  {
    provide: 'APP_CONFIG', useValue: {isDev: true}
  },
    ProductService, Product1Service, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
