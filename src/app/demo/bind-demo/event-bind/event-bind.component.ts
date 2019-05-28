import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-bind',
  templateUrl: './event-bind.component.html',
  styleUrls: ['./event-bind.component.css']
})
export class EventBindComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onInputEvent(event: any) {
    console.log(event);
  }

  onClickEvent(event: any) {
    console.log(event);
  }

}
