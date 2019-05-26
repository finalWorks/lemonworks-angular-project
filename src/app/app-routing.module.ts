import { ProductListComponent } from './demo/di-demo/product-list/product-list.component';
import { RouteDemoPart09Component } from './demo/route-demo/route-demo-part09/route-demo-part09.component';
import { RouteDemoPart08Component } from './demo/route-demo/route-demo-part08/route-demo-part08.component';
import { RouteDemoPart07Component } from './demo/route-demo/route-demo-part07/route-demo-part07.component';
import { RouteDemoPart06Component } from './demo/route-demo/route-demo-part06/route-demo-part06.component';
import { RouteDemoPart05Component } from './demo/route-demo/route-demo-part05/route-demo-part05.component';
import { RouteDemoPart04Component } from './demo/route-demo/route-demo-part04/route-demo-part04.component';
import { RouteDemoPart03Component } from './demo/route-demo/route-demo-part03/route-demo-part03.component';
import { RouteDemoPart02Component } from './demo/route-demo/route-demo-part02/route-demo-part02.component';
import { RouteDemoPart01Component } from './demo/route-demo/route-demo-part01/route-demo-part01.component';
import { RouteDemoMainComponent } from './demo/route-demo/route-demo-main/route-demo-main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './common/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:productId', component: ProductDetailComponent },
  { path: 'routeDemo', component: RouteDemoMainComponent },
  { path: 'routeDemoPart01', component: RouteDemoPart01Component },
  {
    path: 'routeDemoPart02', component: RouteDemoPart02Component,
    children: [
      { path: 'routeDemoPart03/:userId/:userName', component: RouteDemoPart03Component },
      { path: 'routeDemoPart04', component: RouteDemoPart04Component, data: [{ userId: 401, userName: 'Jim' }] }
    ]
  },
  {
    path: 'routeDemoPart05', component: RouteDemoPart05Component,
    children: [
      { path: 'routeDemoPart06', component: RouteDemoPart06Component, outlet: 'aux' },
      { path: 'routeDemoPart07', component: RouteDemoPart07Component, outlet: 'aux' },
      { path: 'routeDemoPart09', component: RouteDemoPart09Component, outlet: 'lzy' },
      { path: 'routeDemoPart08', component: RouteDemoPart08Component }
    ]
  },
  { path: 'diDemo', component: ProductListComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
