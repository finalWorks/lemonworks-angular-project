import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-demo-part03',
  templateUrl: './route-demo-part03.component.html',
  styleUrls: ['./route-demo-part03.component.css']
})
export class RouteDemoPart03Component implements OnInit {

  private userId: number;
  private userName: string;

  private userId1: number;
  private userName1: string;
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    this.userId = this.routeInfo.snapshot.params['userId'];
    this.userName = this.routeInfo.snapshot.params['userName'];

    this.routeInfo.params.subscribe((params: Params) => {
      this.userId1 = params['userId'];
      this.userName1 = params['userName'];
    });
  }
}
