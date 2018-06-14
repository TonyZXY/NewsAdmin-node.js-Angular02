import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-homeview',
  templateUrl: './homeview.component.html',
  styleUrls: ['./homeview.component.css']
})
export class HomeviewComponent implements OnInit {
  @Input() public parentPath;
  @Input() public str;

  constructor() {
  }

  ngOnInit() {
  }

}
