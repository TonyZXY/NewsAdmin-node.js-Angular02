import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-homeview',
  templateUrl: './homeview.component.html',
  styleUrls: ['./homeview.component.css']
})
export class HomeviewComponent implements OnInit {
  @Input() public parentPath; // The path string that will lead to next page (list/add/search based on different item in menu)
  @Input() public str; // The string of current item in menu (news, newsflash, etc.)

  constructor() {
  }

  ngOnInit() {
  }

}
