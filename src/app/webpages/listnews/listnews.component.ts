import {Component, OnInit, Output} from '@angular/core';
import {DataService} from '../../services/data.service';


@Component({
  selector: 'app-listnews',
  templateUrl: './listnews.component.html',
  styleUrls: ['./listnews.component.css']
})
export class ListnewsComponent implements OnInit {
  public string = 'news';
  public edit = '/news/edit/';
  public delete = '/news/delete/';
  newss;

  constructor(public dataService: DataService) {
  }

  getNews() {
    this.dataService.getNewsList()
      .subscribe(newss => this.newss = newss);
  }

  ngOnInit() {
    this.getNews();
  }
}
