import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {

  @Input()
  private rating: number = 0;
  @Input()
  private readOnly: Boolean = true;

  // 输出属性的名字是输入属性名加Change的时候，才可以通过输入属性名进行双向绑定。
  @Output()
  private ratingChange: EventEmitter<number> = new EventEmitter();

  private stars: boolean[];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.stars = [true, true, true, true, true];
    for (let i = 0; i < this.rating; i++) {
      this.stars[i] = false;
    }
  }

  clickStar(index: number) {
    if (!this.readOnly) {
      this.rating = index + 1;
      this.ngOnInit();
      this.ratingChange.emit(this.rating);
    }
  }
}
