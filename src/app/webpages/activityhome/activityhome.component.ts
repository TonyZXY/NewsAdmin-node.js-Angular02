import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activityhome',
  templateUrl: './activityhome.component.html',
  styleUrls: ['./activityhome.component.css']
})
export class ActivityhomeComponent implements OnInit {
  public string = 'activity';
  public str = '活动';

  constructor() { }

  ngOnInit() {
  }

}
