import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-demo-part01',
  templateUrl: './route-demo-part01.component.html',
  styleUrls: ['./route-demo-part01.component.css']
})
export class RouteDemoPart01Component implements OnInit {

  private userId: number;
  private userName: string;
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    if (this.routeInfo.snapshot.queryParams['userId'].length > 0) {
      this.userId = this.routeInfo.snapshot.queryParams['userId'];
      this.userName = this.routeInfo.snapshot.queryParams['userName'];
    } else {
      this.userId = 999;
      this.userName = 'default';
    }
  }

}
