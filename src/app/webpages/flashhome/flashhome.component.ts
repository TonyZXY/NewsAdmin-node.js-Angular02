import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-flashhome',
  templateUrl: './flashhome.component.html',
  styleUrls: ['./flashhome.component.css']
})
export class FlashhomeComponent implements OnInit {
  public string = 'flash';
  public str = '快讯';

  constructor() {
  }

  ngOnInit() {
  }

}
