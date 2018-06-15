import {Component, Input, OnInit} from '@angular/core';
import {NewsFlash} from '../../entities/NewsFlash';

@Component({
  selector: 'app-flashsearch',
  templateUrl: './flashsearch.component.html',
  styleUrls: ['./flashsearch.component.css']
})
export class FlashsearchComponent implements OnInit {
  public string = 'flash';
  public edit = '/flash/edit/';
  public delete = '/flash/delete/';
  @Input() newsFlashes: NewsFlash[];

  constructor() { }

  ngOnInit() {
  }

  receiveMessage($event){
    this.newsFlashes = $event;
  }

}
