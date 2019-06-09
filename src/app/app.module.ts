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
import { BindMainComponent } from './demo/bind-demo/bind-main/bind-main.component';
import { EventBindComponent } from './demo/bind-demo/event-bind/event-bind.component';
import { AttributeBindComponent } from './demo/bind-demo/attribute-bind/attribute-bind.component';
import { HtmlAttributeBindComponent } from './demo/bind-demo/html-attribute-bind/html-attribute-bind.component';
import { TwoWayBindComponent } from './demo/bind-demo/two-way-bind/two-way-bind.component';
import { DomAttributeBindComponent } from './demo/bind-demo/dom-attribute-bind/dom-attribute-bind.component';
import { ObservableDemoComponent } from './demo/bind-demo/observable-demo/observable-demo.component';
import { PipeDemoComponent } from './demo/bind-demo/pipe-demo/pipe-demo.component';
import { MultiplePipe } from './demo/bind-demo/pipe/multiple.pipe';
import { OrderComponent } from './demo/component-demo/order/order.component';
import { OrderChildComponent } from './demo/component-demo/order-child/order-child.component';
import { ComponentDemoComponent } from './demo/component-demo/component-demo/component-demo.component';
import { PriceComponent } from './demo/component-demo/price/price.component';
import { IntermediatorComponent } from './demo/component-demo/intermediator/intermediator.component';
import { LifeDemoComponent } from './demo/component-demo/life-demo/life-demo.component';
import { OnchangeDemoComponent } from './demo/component-demo/life-demo/onchange-demo/onchange-demo.component';
import { DocheckDemoComponent } from './demo/component-demo/life-demo/docheck-demo/docheck-demo.component';
import { OndestroyDemoComponent } from './demo/component-demo/life-demo/ondestroy-demo/ondestroy-demo.component';
import { LifeListDemoComponent } from './demo/component-demo/life-demo/life-list-demo/life-list-demo.component';
import { ViewLifeDemoComponent } from './demo/component-demo/life-demo/view-life-demo/view-life-demo.component';
import { ContentLifeDemoComponent } from './demo/component-demo/life-demo/content-life-demo/content-life-demo.component';
import { FormDemoComponent } from './demo/form-demo/form-demo.component';
import { FormOneDemoComponent } from './demo/form-demo/form-one-demo/form-one-demo.component';
import { FormTwoDemoComponent } from './demo/form-demo/form-two-demo/form-two-demo.component';
import { FormThreeDemoComponent } from './demo/form-demo/form-three-demo/form-three-demo.component';
import { FormFourDemoComponent } from './demo/form-demo/form-four-demo/form-four-demo.component';
import { FormValidateDemoComponent } from './demo/form-demo/form-validate-demo/form-validate-demo.component';
import { AnotherFormValidationDemoComponent } from './demo/form-demo/another-form-validation-demo/another-form-validation-demo.component';
import { MobileValidatorDirective } from './demo/form-demo/directives/mobile-validator.directive';
import { EqualValidatorDirective } from './demo/form-demo/directives/equal-validator.directive';

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
    Product8Component,
    BindMainComponent,
    EventBindComponent,
    AttributeBindComponent,
    HtmlAttributeBindComponent,
    TwoWayBindComponent,
    DomAttributeBindComponent,
    ObservableDemoComponent,
    PipeDemoComponent,
    MultiplePipe,
    OrderComponent,
    OrderChildComponent,
    ComponentDemoComponent,
    PriceComponent,
    IntermediatorComponent,
    LifeDemoComponent,
    OnchangeDemoComponent,
    DocheckDemoComponent,
    OndestroyDemoComponent,
    LifeListDemoComponent,
    ViewLifeDemoComponent,
    ContentLifeDemoComponent,
    FormDemoComponent,
    FormOneDemoComponent,
    FormTwoDemoComponent,
    FormThreeDemoComponent,
    FormFourDemoComponent,
    FormValidateDemoComponent,
    AnotherFormValidationDemoComponent,
    MobileValidatorDirective,
    EqualValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,// 模板式表单相关
    HttpModule,
    // RouterModule.forRoot(routeConfig),
    ReactiveFormsModule // 响应式表单相关
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
