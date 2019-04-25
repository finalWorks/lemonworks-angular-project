import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-demo-part04',
  templateUrl: './route-demo-part04.component.html',
  styleUrls: ['./route-demo-part04.component.css']
})
export class RouteDemoPart04Component implements OnInit {

  private userId: number;
  private userName: string;
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    this.userId = this.routeInfo.snapshot.data[0]['userId'];
    this.userName = this.routeInfo.snapshot.data[0]['userName'];
  }

}
