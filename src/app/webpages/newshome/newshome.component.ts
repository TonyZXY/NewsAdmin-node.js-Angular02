import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-newshome',
  templateUrl: './newshome.component.html',
  styleUrls: ['./newshome.component.css']
})
export class NewshomeComponent implements OnInit {
  public string = 'news';
  public str = '新闻';

  constructor() {
  }

  ngOnInit() {
  }

}
