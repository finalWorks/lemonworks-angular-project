import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-demo-part02',
  templateUrl: './route-demo-part02.component.html',
  styleUrls: ['./route-demo-part02.component.css']
})
export class RouteDemoPart02Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toRouteDemoPart03() {
    this.router.navigate(['routeDemoPart02/routeDemoPart03', 202, 'Tomas']);
  }
}
