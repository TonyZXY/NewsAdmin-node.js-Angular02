import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-newssearch',
  templateUrl: './newssearch.component.html',
  styleUrls: ['./newssearch.component.css']
})
export class NewssearchComponent implements OnInit {
  public string = 'news';
  public edit = '/news/edit/';
  public delete = '/news/delete';
  @Input() newss;

  constructor(public dataService: DataService) { }

  receiveMessage($event) {
    this.newss = $event;
  }

  ngOnInit() {
  }

}
