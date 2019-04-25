import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input()
  private rating: Number = 0;
  private stars: boolean[];
  constructor() { }

  ngOnInit() {
    this.stars = [true, true, true, true, true];
    for (let i = 0; i < this.rating; i++) {
      this.stars[i] = false;
    }
  }

}
