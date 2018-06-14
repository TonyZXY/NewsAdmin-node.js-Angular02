import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-videohome',
  templateUrl: './videohome.component.html',
  styleUrls: ['./videohome.component.css']
})
export class VideohomeComponent implements OnInit {
  public string = 'video';
  public str = '视频';

  constructor() {
  }

  ngOnInit() {
  }

}
