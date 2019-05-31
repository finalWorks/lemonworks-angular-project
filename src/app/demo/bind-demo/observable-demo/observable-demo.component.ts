import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit {

  constructor() {
    Observable.from([1, 2, 3, 4, 5, 6, 7])
      .filter(e => e % 2 === 0)
      .map(e => e * e)
      .subscribe(
        e => console.log(e),
        err => console.log(err),
        () => console.log('结束了')
      )
  }

  ngOnInit() {
  }

}
